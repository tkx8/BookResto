
import{Link} from "react-router-dom";

import{Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";
import React,{useContext} from "react";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = React.useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
          const {data}=await axios.post('/login', {email,password});
          console.log(data);
          if(data!='not found'){
            setUser(data);
            alert('Connexion réussie');
            setRedirect(true);
          }else{
            alert('Connexion a échoué');
          }
        
          
        } catch (e) {
          alert('Connexion a échoué');
        }
      }
    
      if (redirect) {
        return <Navigate to={'/'} />
      }
    return (
        <div className="mt-4 grow flex items-center justify-around textbrown">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="Votre email"   value={email}
                 onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Votre mot de passe"  value={password}
                 onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Connexion</button>
                <div className="text-center py-2 text-gray-500 textbrown">
                Vous n'avez pas encore de compte? <Link className="underline text-black textbrown" to= {"/register"}>
                S'inscrire maintenant</Link>
                </div>
            </form>

            </div>
            
        </div>
    );
}