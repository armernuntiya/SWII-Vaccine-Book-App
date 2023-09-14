'use client'

import {useState} from 'react';
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){

    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']

    const [index,setIndex] = useState(0);

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
        </div>
    );
}