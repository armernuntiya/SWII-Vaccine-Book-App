'use client'

import InteractiveCard from './InteractiveCard';
import Image from 'next/image'
import { Rating } from '@mui/material';



export default function Card({hospitalName, hospitalimg, rate, onCompare}:{hospitalName:string; hospitalimg:string; rate?:number|null; onCompare?:Function}){

    return(
        <InteractiveCard>
            <div className="w-full h-[50%] relative mt-[5%] border-4 border-x-0 border-sky-200">
                <Image src={hospitalimg}
                alt='hospital image'
                fill={true}
                className='object-cover'
                />
            </div>
            <div className="text-center text-2xl font-semibold font-sans mt-[10%] ml-[5%] mr-[5%] h-[15%]">
                {hospitalName}
            </div> { onCompare&&rate?       
            <div className='py-[5%]'>
            <Rating
                name="simple-controlled"
                value={rate}
                onChange={(event, newRate) => {
                    onCompare(newRate,hospitalName);
                }}
                onClick={((event)=>event.stopPropagation())}
                size="large"
            />
            </div>:<></>}
        </InteractiveCard>
    );
}