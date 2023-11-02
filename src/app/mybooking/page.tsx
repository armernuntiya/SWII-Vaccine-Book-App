"use client"

import { removeBooking } from "@/redux/features/bookSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/store"

export default function MyBookingPage(){
    const bookingItem = useAppSelector( (state) => state.bookSlice.bookingItem)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <main className="mx-16 my-16">
            {bookingItem?
                <div className="flex flex-col">
                <div className="text-2xl font-semibold">Name: {bookingItem.name} {bookingItem.surname}</div>
                <div className="text-xl font-semibold">CitizenID: {bookingItem.citizenId}</div>
                <div className="text-xl font-semibold">Hospital: {bookingItem.hospital}</div>
                <div className="text-xl font-semibold">Date: {bookingItem.bookingDate}</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 my-4 px-3 py-2 shadow-sm text-white"
                    onClick={()=>dispatch(removeBooking(bookingItem))}>
                    Cancel
                    </button>
                </div>
            :<div className="text-2xl font-semibold text-center">No Vaccine Booking</div>}

            
        </main>
    )
}