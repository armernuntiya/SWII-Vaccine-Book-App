'use client'

import {useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

export default function Banner(){

    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']

    const [index,setIndex] = useState(0);
    const rounter = useRouter();

    const { data:session } = useSession();


    return(
        <div className={styles.banner} onClick={()=>( setIndex((index+1)%4))}>
            <Image src={covers[index]} 
            alt='cover'
            priority 
            fill={true}/>
            <div className={styles.bannertext}>
                <div style={{marginBottom:"5px", fontSize:"2.5vw"}}>รับวัคซีนเพื่อสุขภาพ</div>
                <div style={{fontSize:"1.25vw"}}>ลงทะเบียนและร่วมปกป้องสังคม</div>
            </div>
            
            {session? <div className='z-30 absolute right-10 top-10 font-semibold text-xl text-rose-500'>
                {session.user.name}</div>:null}

            <button id='linktohospital' className='bg-green-200 border border-green-600 font-semibold 
                                py-2 px-4 m-2 rounded z-3 absolute bottom-0 right-0
                                hover:bg-green-100 hover:text-green-600 hover:border-tranparent'
                    onClick={(e)=>{e.stopPropagation();rounter.push('/hospital');}}
                    >
                Select Hospital
            </button>

        </div>
    );
}