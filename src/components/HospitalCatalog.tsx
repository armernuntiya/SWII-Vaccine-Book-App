import Card from "./Card"
import Link from "next/link"

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}){

    const hospitalJsonReady = await hospitalJson

    return(
        <div className='flex flex-wrap justify-around m-4'>
            {
                hospitalJsonReady.data.map((hospitalItem:Object)=>(
                    <Link href={`/hospital/${hospitalItem.id}`} className="w-1/4">
                        <Card hospitalName={hospitalItem.name} hospitalimg={hospitalItem.picture}/>
                    </Link>
                 ))
            }
        </div>
    )
}