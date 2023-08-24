import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src='/img/cover.avif' 
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