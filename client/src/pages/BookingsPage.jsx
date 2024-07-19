import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import {format} from "date-fns";
import { Link } from "react-router-dom";

export default function BookingsPage(){
    const[bookings,setBookings]=useState([]);
    useEffect(()=>{
        axios.get('/bookings').then(response=>{
            setBookings(response.data);
        });

    },[]);
    return(
         <div>
            <AccountNav/>
            <div className="">
            {bookings?.length>0 && bookings.map(booking=>(
                <Link to={`/account/bookings/${booking._id}`} className="flex mb-4 gap-4 placeContainer rounded-2xl overflow-hidden">
                    <div className="image-container w-48 h-48 ">
                        <PlaceImg place={booking.place}/>
                    </div>
                    <div className="py-3 pr-3 grow">
                        <h2 className="text-xl textbrown">{booking.place.title}</h2>
                        <div className="flex gap-2 items-center border-t border-gray-300 mt-2 py-2 textbrown">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
</svg>

                        {format(new Date(booking.checkIn), 'yyyy-MM-dd')}
                        </div>
                    </div>
                </Link>
            ))}
            </div>
         </div>
    );
}