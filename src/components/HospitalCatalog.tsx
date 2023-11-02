import Card from "./Card"
import Link from "next/link"

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}){

    const hospitalJsonReady = await hospitalJson

    return(
        <div className='flex flex-wrap justify-around m-4'>
            {
                hospitalJsonReady.data.map((hospitalItem:Object)=>(
                    <Link href={`/hospital/${hospitalItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                    m-2 sm:m-4 md:m-4 lg:m-8">
                        <Card hospitalName={hospitalItem.name} hospitalimg={hospitalItem.picture}/>
                    </Link>
                 ))
            }
        </div>
    )
}