'use client'

import Card from "./Card"
import { useReducer } from "react"

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

    console.log(compareList);

    return(
        <div>
            <div className='flex flex-wrap justify-around m-4'>
                <Card hospitalName='Chulalongkorn Hospital' hospitalimg='/img/chula.jpg' rate={compareList.get('Chulalongkorn Hospital')||null} onCompare={(rating:number | null,hospitalName:string)=>dispatchCompare({rating, hospitalName})} />
                <Card hospitalName='Rajavithi Hospital' hospitalimg='/img/rajavithi.jpg' rate={compareList.get('Rajavithi Hospital')||null} onCompare={(rating:number | null,hospitalName:string)=>dispatchCompare({rating, hospitalName})}/>
                <Card hospitalName='Thammasat University Hospital' hospitalimg='/img/thammasat.jpg' rate={compareList.get('Thammasat University Hospital')||null} onCompare={(rating:number | null,hospitalName:string)=>dispatchCompare({rating, hospitalName})}/>
            </div>
            <div className="flex flex-col pl-10 py-4 text-xl font-sans">
                {Array.from(compareList,([hospitalName,rating])=>({hospitalName,rating})).map((hospital)=><div key={hospital.hospitalName} onClick={(e)=>{dispatchCompare({rating:null, hospitalName:hospital.hospitalName});}}>{hospital.hospitalName} Rating = {hospital.rating}</div>)}
            </div>
        </div>
    )
}