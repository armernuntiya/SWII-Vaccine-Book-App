"use client"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Select,MenuItem,TextField,InputLabel } from '@mui/material';
import { useState } from 'react';
import dayjs,{ Dayjs } from 'dayjs';
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from '../../interfaces';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function VaccineBookingForm(){
        const dispatch = useDispatch<AppDispatch>()
        const makeBook = () => {
            if(name && surname && citizenId && hospital && bookingDate){
                const item:BookingItem ={
                    name: name,
                    surname: surname,
                    citizenId: citizenId,
                    hospital: hospital,
                    bookingDate: dayjs(bookingDate).format('YYYY/MM/DD')
                }
                dispatch(addBooking(item))
            }
                
            }
      
    const [name, setName] = useState<string|null>(null)
    const [surname, setSurname] = useState<string|null>(null)
    const [citizenId, setCitizenId] = useState<string|null>(null)      
    const [bookingDate, setBookingDate]= useState<Dayjs|null>(null)
    const [hospital, setHospital]= useState('Chulalongkorn Hospital')

    return(
    <div className='bg-emerald-100 rounded-lg 
        flex flex-col space-y-7
        px-10 py-5 w-[50%] h-[425px] '>
        <div className='flex space-x-5'>
        <TextField id="name" label="Name" variant="standard" className='w-1/2' onChange={e=>setName(e.target.value)}/>
        <TextField id="surname" label="Surname" variant="standard" className='w-1/2' onChange={e=>setSurname(e.target.value)}/>
        </div>

        <TextField id="idNumber" label="Identification Number" variant="standard" className='w-1/2' onChange={e=>setCitizenId(e.target.value)}/>
        
        <div className='flex flex-col'>
            <label>Hospital</label>
        <Select
            variant='standard' name='hospital' id='hospital'
            className='h-[3em] placeholder:'
            value={hospital}
            onChange={(e)=>{setHospital(e.target.value)}}
            >
            <MenuItem value={"Chulalongkorn Hospital"}>Chulalongkorn Hospital</MenuItem>
            <MenuItem value={"Rajavithi Hospital"}>Rajavithi Hospital</MenuItem>
            <MenuItem value={"Thammasat University Hospital"}>Thammasat University Hospital</MenuItem>
        </Select>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className='bg-slate-100'
            value={bookingDate}
            onChange={(value)=>{setBookingDate(value)}}
        />
        </LocalizationProvider>
        <button className="block rounded-md bg-green-600 hover:bg-green-300 px-3 py-2 shadow-sm text-white"
                onClick={makeBook}>
            Booking
        </button>
    </div>
    );
}