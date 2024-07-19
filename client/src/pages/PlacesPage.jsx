import {Link} from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";
import {useEffect, useState} from "react";
import PlaceImg from "../PlaceImg";
export default function PlacesPage() {
  const [places,setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/user-places').then(({data}) => {
     setPlaces(data);
   });
  }, []);
  

  return (
    
    <div>
      <AccountNav/>
      
        <div className="text-center">
          
        <Link className="inline-flex gap-1 bg-primary gradient text-white py-2 px-6 rounded-full" to={'/account/places/new'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> Ajouter un nouveau restaurant</Link>
 </div>
      
      <div className="mt-4">
        {places.length>0 && places.map(place=>(
          <Link to={'/account/places/' +place._id} className="flex mb-2 cursor-pointer gap-4 placeContainer p-4 rounded-2xl">
            <div className="flex w-48 h-48 shrink-0">
               <PlaceImg place={place}/>
            </div>
            <div className="grow-0 shrink">
              <h2 className="text-xl font-bold textbrown">{place.title}</h2>
            <p className="text-sm mt-2 textbrown">{place.description} </p>
            </div>

            
          </Link>

        ))}
      </div>
    
    </div>
  );
}