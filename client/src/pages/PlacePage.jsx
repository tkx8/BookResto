import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage(){
    const {id}=useParams();
    const [place, setPlace]=useState(null);

    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then(response =>{
           setPlace(response.data);
        });
    },[id]);

    if(!place)return '';

    

    return(
        <div className="mt-4 bgBlack -mx-8 px-8 py-8 textbrown">
            <h1 className="text-3xl">{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place} />
            <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                {place.description}</div>
             <BookingWidget place={place}/>
            </div>
           


        
    
    
    
    );
}