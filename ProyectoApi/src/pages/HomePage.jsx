import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from '../components/generals/Cards';
import style from './HomePage.module.css'
import Pagination from '../components/generals/Pagination';

const UrlBase = "https://www.episodate.com/api/most-popular";


const TvPrograms = () => {
  const [ShowsData, setShowsData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const[urlApi, setUrlApi] = useState(UrlBase);

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const { data } = await axios.get(urlApi);
        setShowsData(data.tv_shows);
        setPagination(data.pages);
      }
      catch (error) {
        console.log("Hubo un error:", error);
      }
    }
    fetchShowData();
  }, [urlApi]);

  return (
    <div>
      <ul className={style.CardsGrid}>
        {ShowsData.map((listado) =>
          <Cards
            key={listado.id}
            Nombre={listado.name}
            Img={listado.image_thumbnail_path}
          />)}
      </ul>
      <div className='d-flex justify-content-center '>
      <Pagination
        pageCount={pagination}
        setUrlApi={setUrlApi}
      />
      </div>
    </div>
  );
};

export default TvPrograms;