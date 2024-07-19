
import React,{useContext, useState} from "react";
import { UserContext } from "../UserContext";
import {Navigate, useParams, useLocation} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";
export default function AccountPage(){
    const[redirect, setRedirect]=useState(null);
    const {ready,user, setUser}= React.useContext(UserContext);
  
    let {subpage}=useParams();

    if(subpage===undefined){
     subpage='profile';
    }

    async function logout(){
       await axios.post('/logout');
       
       setRedirect('/');
       setUser(null);

    }

    if(!ready){
        return 'Loading...';
    }
    if(ready &&!user && !redirect){
        return <Navigate to={'/login'}/>
    }

  

   

    if (redirect){
        return <Navigate to ={redirect}/>
    }
    return(
        <div>
            <AccountNav/>
            {subpage === 'profile'&&(
                <div  className="w-full h-full flex justify-center items-center flex-col">
               
                    <img  className="rounded-2xl w-102 h-64" src="https://ychef.files.bbci.co.uk/1920x960/p0cxxt1m.jpeg" alt="quebec lake"/>
                
                    <p className="textbrown">&copy; BBC</p>
                <div className="text-center max-w-lg mx-auto textbrown">
                    Connecté(e) en tant que {user.name} ({user.email}) <br />
                    <button onClick={logout}  className="primary max-w-sm mt-2">Se déconnecter</button>
                    </div>
                </div>
            )}

            {subpage=== 'places' && (
                <PlacesPage/>

            )}
        </div>
    );
}