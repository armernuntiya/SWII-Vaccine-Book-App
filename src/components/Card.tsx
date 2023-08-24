import styles from './card.module.css'
import Image from 'next/image'

export default function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src='/img/syringe.avif'
                alt='syringe'
                fill={true}
                />
            </div>
            <div className={styles.cardtext}>
                <div style={{fontWeight:"bolder", fontSize:"18px", fontFamily:"\'Prompt\', sans-serif"}}>วัคซีน (Vaccine)</div>
                <div style={{fontFamily:"\'Prompt\', sans-serif"}}>สารชนิดหนึ่งที่ฉีดเข้าไปร่างกาย เพื่อสร้างภูมิคุ้มกันโรคต่างๆ ส่วนใหญ่ทำมาจากเชื้อโรค แบ่งเป็น 2 ประเภท คือ 
                ทำจากเชื้อโรคที่ตายแล้วมีสารของเชื้อโรคมาฉีดเข้าตัวเรา และ ทำจากเชื้อโรคที่อ่อนแอ 
                ทำให้มันสลบพิษจะได้ไม่รุนแรง เมื่อฉีดเข้าไปในร่างกายคนเรา ร่างกายเราก็จะสร้างภูมิคุ้มกัน กับโรคนั้นๆ</div>
            </div>        
        </div>
    );
}