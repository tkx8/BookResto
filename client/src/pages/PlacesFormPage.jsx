import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import { Navigate, useParams } from "react-router-dom";


export default function PlacesFormPage(){
   const {id}=useParams();
    const[title, setTitle]=useState("");
    const[address, setAddress]=useState("");
    
    const[ addedPhotos, setAddedPhotos]=useState([]);
    const[description, setDescription]=useState("");
    const[perks, setPerks]=useState([]);
    const[extraInfo, setExtraInfo]=useState("");
   
    const[guests, setGuests]=useState("");
    const[redirect,setRedirect]=useState(false);
    useEffect(()=>{
      if(!id){
        return;
      }
      axios.get('/places/' + id).then (response=>{
        const {data}=response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setGuests(data.guests);
      });
    }, [id]);
    
    function inputHeader(text){
        return ( <h2 className="text-2xl mt-4 ">{text}</h2>);
       }
      
       function inputDescription(text)
       {
        return (<p className=" text-gray-500 text-sm">{text}</p>);
       }
      
       function preInput(header, description){
        return(
          <>
          {inputHeader(header)}
          {inputDescription(description)}
          </>
      
        );
       }
      
       async function savePlace(ev){
        ev.preventDefault();
        const placeData={title,address, addedPhotos,description, perks, extraInfo, guests};
        if(id){
          await axios.put('/places',{
            id,
            ...placeData
          });
          setRedirect(true);
        }else{
          await axios.post('/places',placeData);
          setRedirect(true);
        }
       }

       if(redirect){
        return <Navigate to={'/account/places'}/>
       }
    return (
        <div className="textbrown">
          <AccountNav/>
        <form onSubmit={savePlace}>
          {preInput('Nom', 'Nom du restaurant' )}
          <input type="text" placeholder="nom" value={title} onChange={ev=>setTitle(ev.target.value)}></input>
          {preInput('Adresse', ' Adresse du restaurant' )}
          
          <input type="text" placeholder="adresse" value={address} onChange={ev=>setAddress(ev.target.value)}></input>
          {preInput('Images', 'Le plus le mieux' )}
         
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
        {preInput('Description', 'Description du restaurant' )}
        <textarea value={description} onChange={ev=>setDescription(ev.target.value)}/>
        {preInput('Bonus', 'Cochez tous les bonus' )}
        
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks}/>
        </div>
        {preInput('Info extra', '' )}
        
        <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)}/>
        {preInput('Rendez-vous', '' )}
        
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          
          <div>
          <h3 className="mt-2 -mb-1">Invités maximum par rendez-vous</h3>
          <input type="number" placeholder="10" value={guests} onChange={ev=>setGuests(ev.target.value)}/>
          </div>
        </div>

        <div>
          <button className="primary my-4">Sauvegarder</button>
        </div>
        </form>
        </div>

    );
}