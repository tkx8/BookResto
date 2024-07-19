
import{Link} from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "../Image";

export default function IndexPage(){
    const[places,setPlaces]= useState([]);
    const [videoLoaded, setVideoLoaded] = useState(false);
    useEffect(()=>{
        axios.get('/places').then(response=>{
           setPlaces(response.data);
        });

    },[]);

    const handleVideoCanPlay = () => {
      setVideoLoaded(true);
    };
    return(
      <div>
        <div className="w-full h-full pt-12 pb-4">
        <h2 className="textbrown text-4xl font-bold">Cuisines Québécoises </h2>
        </div>
        <div className="w-full h-full pt-8 pb-8">
        <p className="textbrown text-md font-bold "> La cuisine québécoise, riche et diversifiée, reflète les influences françaises, autochtones, britanniques, écossaises et irlandaises. Elle est célèbre pour des plats comme la poutine, la tourtière, et le pouding chômeur. Les soupes aux pois et les cretons sont aussi emblématiques. Les ingrédients locaux, tels que le sirop d'érable, les fromages artisanaux et les viandes de gibier, jouent un rôle central. La cuisine contemporaine intègre des influences internationales tout en honorant les traditions locales, offrant ainsi une expérience gastronomique unique et chaleureuse. </p>
        </div>
        <div className="w-full h-full pt-8">
        <video className="rounded-2xl " playsInline loop autoPlay muted="" preload="metadata" poster="https://ychef.files.bbci.co.uk/1920x960/p0cxxfh5.jpeg " onCanPlay={handleVideoCanPlay} style={{ display: videoLoaded ? 'block' : 'none' }}>
		    <source src="https://laurieraphael.com/wp-content/uploads/2021/10/LR-video-cut.mp4"/>
        Your browser does not support the video tag.
		</video>   
    {!videoLoaded && (
          <img 
            src="https://laurieraphael.com/wp-content/uploads/2021/08/lr-img-home-header-min.jpg" 
            alt="Loading video..." 
            width="100%"
            height="100%"
          />
        )} 
        
        <p className="textbrown">&copy; BBC, LAURIE RAFAEL RESTAURANT</p>
        
        </div>
        <div class="fish-row">
        <svg class="hellohal" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 328.4 189.5" enable-background="new 0 0 328.4 189.5">
<g id="Rg_1">
  <g fill="#71706F" clip-rule="evenodd" fill-rule="evenodd">
    <path d="m87.3 116.6c3.9-1.3 7.8-2.6 11.6-3.8 14.1-4.7 28.3-9.3 42.4-14.2 4.3-1.5 8.5-3.6 12.4-6.1 6.3-4 6.5-8.5 1.1-13.6-4.9-4.6-10.8-7.5-16.6-10.5-1.4-0.7-2.7-1.3-4.1-2.5 6.3-1.1 12.6-2.4 18.9-3.3 15.2-2.3 30.5-3.1 45.8-1.9 33.9 2.6 63.6 15.1 89.4 37.2 6.3 5.4 11.9 11.4 17.9 17.1 0.5 0.5 0.9 1 1.4 1.6-9.7 11.5-21.1 20.6-34.6 26.9-17.6 8.2-36.3 10.9-55.5 10.3-26.9-0.9-52.7-7.5-77.9-16.6-16.8-6-33.3-13-49.9-19.5-1.3-0.5-2.3-0.6-3.6-0.1-16.5 6.4-33.1 12.6-49.7 18.9-0.2 0.1-0.4 0.1-1.1 0.2l1.6-1.2c4.1-3 8.3-5.8 12.1-9 2.1-1.8 3.9-4 5.5-6.3 1.7-2.5 1.4-5.2-0.6-7.5-1.8-2-3.8-3.7-5.9-5.4-4.9-4-10.1-7.7-14.7-11.9-3.4-3.1-6.2-7-9.2-10.6 0.2-0.2 0.3-0.4 0.5-0.5 0.4 0.1 0.8 0.2 1.2 0.4 20.2 10.3 40.4 20.8 60.6 31.3 0.4 0.1 0.7 0.4 1 0.6-1-0.3-2.1-0.5-3.1-0.8-14.1-4.4-27.4-10.9-40.5-17.8-0.6-0.3-1.3-0.6-1.9-0.9 1.7 1.7 3.6 3 5.3 4.5 3.5 3 7.2 5.9 10.4 9.2 4.4 4.7 4.1 8.6-0.6 13.1-1.3 1.2-2.8 2.4-4.4 3.7 5-1.8 9.6-3.6 14.4-5.1 6.7-2.1 13.6-3.9 20.4-5.9zm6.1 0c0.2 0.2 0.3 0.4 0.4 0.4 1.7 0.7 3.3 1.4 5 2.1 25.2 10.2 50.8 19.4 77.5 25 21.1 4.4 42.3 6.6 63.9 3.4 23-3.4 43.1-12.8 59.8-29.1 0.4-0.4 0.7-0.8 1.3-1.5-6.2-6-12.2-12.1-18.6-17.7-19.6-17.1-42.1-27.9-68-31.2-17.9-2.3-35.9-1.8-53.9-0.9-1.3 0.1-2.5 0.3-4.3 0.5 1.5 0.9 2.5 1.4 3.4 2.1 2.2 1.8 4.7 3.5 6.6 5.6 3.9 4.3 4 9.1 0.1 13.4-2.1 2.4-4.6 4.7-7.3 6.2-5.3 3-10.7 5.8-16.4 8.1-16 6.4-32.6 10.5-49.5 13.6z"/>
    <path d="m262.8 118.1c-6.3 0-11.3-5-11.3-11.2s5.1-11.3 11.3-11.3c6.1 0 11.1 5 11.2 11.1 0.1 6.2-5 11.3-11.2 11.4zm-0.1-5.3c3.3 0 6-2.8 6-6-0.1-3.2-2.7-5.8-6-5.9-3.2 0-5.9 2.6-6 5.8 0 3.3 2.7 6.1 6 6.1z"/>
    <path d="m226 88.3c-0.8 3.9-2.3 8.4-2.7 13-0.8 9.8 3.1 17.9 9.8 24.9 5.5 5.7 12 9.8 19.1 13.2 0.7 0.3 1.3 0.6 1.9 1.2l-1.2-0.3c-9.2-3.4-17.9-7.6-25.1-14.5-11.8-11.7-11.4-25.2-1.8-37.5z"/>
  </g>
</g>
</svg>
        </div>
        <div className="w-full h-full pt-8 pb-8">
        <h2 className="textbrown text-4xl font-bold">Venez déguster les restaurants du Québec et de Montréal: </h2>
        </div>
       

        <div className="mt-8  grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pb-20">
         
        {places.length>0 && places.map(place=>(
          <Link to={'/place/' +place._id} >

           <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
              
              < Image className=" rounded-2xl object-cover aspect-square " src={place.photos?.[0]} alt="Restaurants"/>
              
               )}
           </div>
           
           
            <h2 className="text-sm font-bold truncate leading-4 textbrown"> {place.title}</h2>
            <h3 className= "truncate textbrown">{place.address}</h3>
          </Link>  
        ))}
       </div>
      </div>
    );
}