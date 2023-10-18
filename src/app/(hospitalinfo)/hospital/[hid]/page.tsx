import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage({params}: {params: {hid:string}}){

    const hospitalDetail = await getHospital(params.hid);

    //** Mock Data for Demonstration Only*/

    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", {name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
    mockHospitalRepo.set("002", {name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
    mockHospitalRepo.set("003", {name:'Thammasat University Hospital', image:'/img/thammasat.jpg'}) 

    return(
        <main>
            <div className="flex flex-row m-5">
                <Image src={hospitalDetail.data.picture}
                    alt='Hospital Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] border-2 border-black"/>
                <div className="flex flex-col mx-8 my-4 relative">
                    <div className="text-3xl font-medium">{hospitalDetail.data.name}</div>
                    <div className="text-xl absolute bottom-0 left-0">
                        <div>Address : {hospitalDetail.data.address}</div>
                        <div>District : {hospitalDetail.data.district}</div>
                        <div>Province : {hospitalDetail.data.province}</div>
                        <div>Tel : {hospitalDetail.data.tel}</div>
                    </div>
                </div>
            </div>
        </main>
    )
}
