"use client"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Select,MenuItem,TextField,InputLabel } from '@mui/material';

export default function VaccineBookingForm(){
    return(
    <div className='bg-emerald-100 rounded-lg 
        flex flex-col space-y-7
        px-10 py-5 w-[50%] h-[360px] '>
        <div className='flex space-x-5'>
        <TextField id="name" label="Name" variant="standard" className='w-1/2'/>
        <TextField id="surname" label="Surname" variant="standard" className='w-1/2'/>
        </div>

        <TextField id="idNumber" label="Identification Number" variant="standard" className='w-1/2'/>
        
        <div className='flex flex-col'>
            <label>Hospital</label>
        <Select
            variant='standard' name='hospital' id='hospital'
            className='h-[3em] placeholder:'
            >
            <MenuItem value={"CH"}>Chulalongkorn Hospital</MenuItem>
            <MenuItem value={"RH"}>Rajavithi Hospital</MenuItem>
            <MenuItem value={"TUH"}>Thammasat University Hospital</MenuItem>
        </Select>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className='bg-slate-100'/>
        </LocalizationProvider>
    </div>
    );
}