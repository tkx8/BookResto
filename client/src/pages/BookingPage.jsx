import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import {format} from "date-fns";

export default function BookingPage(){
    const {id}=useParams();
    const [booking, setBooking]=useState(null);
    useEffect(()=>{
        if(id){
            axios.get('/bookings').then(response=>{
                const foundBooking=response.data.find(({_id})=>_id===id);
                if (foundBooking){
                    setBooking(foundBooking);
                }
            });
        }

    },[id]);

    if(!booking){
        return '';
    }
    return(
         <div className="my-8 textbrown">
             <h1 className="text-3xl ">{booking.place.title}</h1>
             <AddressLink className="my-2-block ">{booking.place.address}</AddressLink>
             <div className="gb-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between ">
                <h2 className="text-2xl mb-4 ">Vos informations de réservation:</h2>
                Date:  {format(new Date(booking.checkIn), 'yyyy-MM-dd')}
                
             </div>
             
             <PlaceGallery place={booking.place}/>
         </div>
    );
}