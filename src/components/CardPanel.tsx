'use client'

import Card from "./Card"
import { useReducer } from "react"
import Link from "next/link"

export default function CardPanel(){

    const compareReducer = (compareList:Map<string,number|null>, action:{rating:number|null, hospitalName:string})=>{
            switch(action.rating){
                case null:{
                    compareList.delete(action.hospitalName);
                    return new Map(compareList);}
                default:{
                    compareList.set(action.hospitalName,action.rating);
                    return new Map(compareList);}    
            }
        }
    
    const [compareList, dispatchCompare] = useReducer(compareReducer,new Map<string,number | null>())

    //** Mock Data for Demonstration Only*/

    const mockHospitalRepo = [
     {hid:"001",name:'Chulalongkorn Hospital', image:'/img/chula.jpg'},
     {hid:"002",name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'},
     {hid:"003",name:'Thammasat University Hospital', image:'/img/thammasat.jpg'}
     ]

    return(
        <div>
            <div className='flex flex-wrap justify-around m-4'>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/4">
                            <Card hospitalName={hospitalItem.name} hospitalimg={hospitalItem.image} rate={compareList.get(hospitalItem.name)||null} onCompare={(rating:number | null,hospitalName:string)=>dispatchCompare({rating, hospitalName})} />
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-col pl-10 py-4 text-xl font-sans">
                {Array.from(compareList,([hospitalName,rating])=>({hospitalName,rating})).map((hospital)=><div key={hospital.hospitalName} onClick={(e)=>{dispatchCompare({rating:null, hospitalName:hospital.hospitalName});}}>{hospital.hospitalName} Rating = {hospital.rating}</div>)}
            </div>
        </div>
    )
}