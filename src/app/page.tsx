import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='flex flex-wrap justify-around m-4'>
        <Card hospitalName='Chulalongkorn Hospital' hospitalimg='/img/chula.jpg'/>
        <Card hospitalName='Rajavithi Hospital' hospitalimg='/img/rajavithi.jpg'/>
        <Card hospitalName='Thammasat University Hospital' hospitalimg='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}
