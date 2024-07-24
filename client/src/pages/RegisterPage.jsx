
import{Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
export default function RegisterPage(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password, setPassword]=useState("");

    async function registerUser(ev){
        ev.preventDefault();
        try{
        await axios.post('/register', {
            name,
            email,
            password,
        });
        alert("Inscription réussi. Vous pouvez maintenant vous connecter");
        }catch(e){
            alert("L'enregistrement a échoué. Veuillez réessayer plus tard.");
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around textbrown">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto " onSubmit={registerUser}>
                <input type="text" placeholder="Nom au complet" value={name} onChange={ev=> setName(ev.target.value)}/>
                <input type="email" placeholder="Votre adresse email" value={email} onChange={ev=>setEmail(ev.target.value)}/>
                <input type="password" placeholder="Mot de passe" value={password} onChange={ev=>setPassword(ev.target.value)}/>
                <button className="primary">Enregistrer</button>
                <div className="text-center py-2 text-gray-500 textbrown">
                   
Vous avez déjà un compte? <Link className="underline text-black textbrown" to= {"/login"}>Se connecter</Link>
                </div>
            </form>

            </div>
            
        </div>
    );
}