import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Cards from '../components/generals/Cards';
import style from './HomePage.module.css'
import Search from '../components/Error 404/Search/Search';

const TvPrograms = () => {
    const [ShowsData,setShowsData]=useState([]);
    const UrlBase="https://www.episodate.com/api/search?q=";

    const [search , setSearch]= useState ('');



    useEffect(()=>{
    
      
        const fetchShowData = async() => {
            try{
                const  {data} = await axios.get(`${UrlBase}${search}`);
                setShowsData(data.tv_shows);             
            }
            catch(error){
                console.log("Hubo un error:",error);
            }
        }
        fetchShowData();  
    },[search]);
    
   

  return (
   <>
    <div>
      <Search setSearch= {setSearch}/>
    </div>
    <div>
        <ul className={style.CardsGrid}>
            {ShowsData.map((listado) => 
              <Cards 
                key={listado.id}
                Nombre={listado.name}
                Img={listado.image_thumbnail_path}
              />)}
        </ul>
    </div>
    </>
  );
};

export default TvPrograms;