import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Cards from '../components/generals/Cards';
import style from './HomePage.module.css'

const TvPrograms = () => {
    const [ShowsData,setShowsData]=useState([]);
    const UrlBase="https://www.episodate.com/api/most-popular";

    useEffect(()=>{
        const fetchShowData = async() => {
            try{
                const  {data} = await axios.get(UrlBase);
                setShowsData(data.tv_shows);             
            }
            catch(error){
                console.log("Hubo un error:",error);
            }
        }
        fetchShowData();  
    },[]);

    console.log(ShowsData);

  return (
    <div>
        <ul className={style.CardsGrid}>
            {ShowsData.map((listado) => 
              <Cards 
                key={listado.id}
                Nombre={listado.name}
                Img={listado.image_thumbnail_path}
                id={listado.id}
              />)}
        </ul>
    </div>
  );
};

export default TvPrograms;