import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from '../components/generals/cardsHome/Cards';
import style from '../css/HomePage.module.css'
import Pagination from '../components/generals/pagination/Pagination';
import Search from '../components/specific/search/Search';

const UrlBase="https://www.episodate.com/api/search?q=";

const TvPrograms = () => {
  
  const [ShowsData,setShowsData]=useState([]);
  const [search , setSearch]= useState ('');
  const [pagination, setPagination] = useState("");
  const[info, setInfo] = useState({});

  useEffect(()=>{
      const fetchShowData = async() => {
          try{
              const  {data} = await axios.get(`${UrlBase}${search}${pagination}`);
              setShowsData(data.tv_shows); 
              setInfo(data.pages);
          }
          catch(error){
              console.log("Hubo un error:",error);
          }
      }
      fetchShowData();  
  },[search, pagination]);

  console.log(info)

  return (
   <>
    <div className='d-flex justify-content-center'>
      <Search 
        setSearch= {setSearch}
        setPagination={setPagination}
       />
      
    </div>
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

      <div className='d-flex justify-content-center '>
        <Pagination
          pageCount={info}
          setPagination={setPagination}
        />
      </div>

    </div>
    </>
  );
};

export default TvPrograms;