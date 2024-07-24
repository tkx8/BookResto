import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";

export default function BookingWidget({place}){
  const [checkIn,setCheckIn] = useState('');
  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = React.useContext(UserContext);
   
  useEffect(()=>{
    if(user){
        setName(user.name);
    }
  },[user]);
  async function bookResto() {

    if(user){
      console.log(user);

      if(checkIn && numberOfGuests && name && phone)
      {
        const response = await axios.post('/bookings', {
          checkIn,numberOfGuests,name,phone,
          place:place._id,
          
        });
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);

      }
      else{
        alert("Veuillez entrer tous les champs");
      }
      
      

    }
    else
    {
      alert('Veuillez vous connecter en premier');
    }
   
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] bgBlack">
                 <div className="textbrown font-bold">
                    Date: {place.checkIn}
                 </div>

                 <div className="textbrown">
                    
                    Nombre d'invité(e)s maximum: {place.guests}
                 </div>
                 <div>
                    <div className="flex ">

                    
                    <div className=" py-3 px-4 rounded-2xl textbrown">
                        <label>Date de réservation: </label>
                        <input className="gradient rounded-2xl" type="date" value={checkIn} onChange={ev=>setCheckIn(ev.target.value)} />
                    </div>
                    </div>

                    <div className="  py-3 px-4 rounded-2xl textbrown">
                        <label>Nombre d'invité(e)s:</label>
                        <input type="number" value={numberOfGuests} onChange={ev=>setNumberOfGuests(ev.target.value)}/>
                    </div>
                    {checkIn && (
                        <div className="py-3 px-4 textbrown">
                            <label>Votre nom au complet</label>
                            <input type="text" placeholder="Nom au complet" value={name} onChange={ev=>setName(ev.target.value)}/>
                            <label>Numéro de téléphone</label>
                            <input type="tel" placeholder="Numéro de téléphone" value={phone} onChange={ev=>setPhone(ev.target.value)}/>
                        </div>

                        

                    )}
                    <h2 className="font-semibold text-2xl textbrown">Info extra</h2>
                    <div className=" mt-2 text-sm text-gray-700 leading-4 textbrown">
                        {place.extraInfo}
                    </div>
                    <div className="shadow p-4 rounded-2xl">
                        <button onClick={bookResto} className="primary mt-4"> Réserver</button>
  
                    </div>
                 </div>

            </div>
    );
}