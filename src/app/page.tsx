import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"15px"}}>
      <Card/>
      </div>
    </main>
  )
}
