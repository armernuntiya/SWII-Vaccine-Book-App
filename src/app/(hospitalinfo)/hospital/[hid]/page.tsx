import Image from "next/image"

export default function HospitalDetailPage({params}: {params: {hid:string}}){

    //** Mock Data for Demonstration Only*/

    const mockCarRepo = new Map()
    mockCarRepo.set("001", {name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
    mockCarRepo.set("002", {name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
    mockCarRepo.set("003", {name:'Thammasat University Hospital', image:'/img/thammasat.jpg'})


    return(
        <main>
            <div className="flex flex-row m-5">
                <Image src={(mockCarRepo.get(params.hid)).image}
                    alt='Hospital Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] border-2 border-black"/>
                <div className="text-2xl font-medium mx-8">{(mockCarRepo.get(params.hid)).name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:"001"},{hid:"002"},{hid:"003"}];
}