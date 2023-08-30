import Image from 'next/image'

export default function Card({hospitalName, hospitalimg}:{hospitalName:string; hospitalimg:string}){
    return(
        <div className="w-1/6 h-[350px] rounded-lg shadow-lg bg-cyan-50 border border-sky-200">
            <div className="w-full h-[50%] relative mt-[10%] border-4 border-x-0 border-sky-200">
                <Image src={hospitalimg}
                alt='hospital image'
                fill={true}
                className='object-cover'
                />
            </div>
            <div className="text-center text-2xl font-semibold font-sans mt-[15%] ml-[5%] mr-[5%]">
                {hospitalName}
            </div>        
        </div>
    );
}