import Image from "./Image";

export default function PlaceImg({place}){
    if(!place.photos?.length){
        return '';
    }
   
    return(
        
    < Image className="w-full h-full object-cover "src={place.photos[0]} alt="Restaurants photos"/>
         
    );
}