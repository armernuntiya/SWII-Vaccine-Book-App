import HospitalCatalog from "@/components/HospitalCatalog";
import { render,screen,waitFor } from "@testing-library/react";

const mockResult ={
    "success": true,
  "count": 4,
  "data": [
    {
      "_id": "652ef1bd31b5208d2c5d3a44",
      "name": "Chulalongkorn Hospital",
      "address": "1873 Rama IV Rd",
      "district": "Pathum Wan",
      "province": "Bangkok",
      "postalcode": "10330",
      "tel": "026494000",
      "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      "__v": 0,
      "id": "652ef1bd31b5208d2c5d3a44"
    },
    {
      "_id": "652ef1f131b5208d2c5d3a47",
      "name": "Rajavithi Hospital",
      "address": "2 Phaya Thai Rd, Thung Phaya Thai",
      "district": "Ratchathewi",
      "province": "Bangkok",
      "postalcode": "10400",
      "tel": "022062900",
      "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      "__v": 0,
      "id": "652ef1f131b5208d2c5d3a47"
    },
    {
      "_id": "652ef21c31b5208d2c5d3a4a",
      "name": "Thammasat University Hospital",
      "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      "district": "Khlong Luang",
      "province": "Pathum Thani",
      "postalcode": "12120",
      "tel": "029269999",
      "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      "__v": 0,
      "id": "652ef21c31b5208d2c5d3a4a"
    },
    {
      "_id": "65439bd1f710e270a32ed701",
      "name": "Vajira Hospital",
      "address": "681 Samsen Road",
      "district": "Dusit",
      "province": "Bangkok",
      "postalcode": "10300",
      "tel": "02-244-3000",
      "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      "__v": 0,
      "id": "65439bd1f710e270a32ed701"
    }
  ]
}

describe('HospitalCatalog', ()=>{
    it('should have correct number of hospital images', async()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson: mockResult})
        render(hospitalCatalog)

        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(4)
            }
        )
    })
})