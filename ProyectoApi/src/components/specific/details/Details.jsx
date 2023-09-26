import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ShowData}) => {

  const {description, genres, image_path, name, rating, status, start_date, rating_count, episodes } = ShowData;

  const seasons = [...new Set(episodes?.map(episode => episode.season))];

  return (

      <>
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
              <img src={image_path} alt={name} className="w-100" />
            </div>
            <div className='col-12 col-md-6 col-lg-6 col-xl-8'>
                <h1>{name}</h1>
                <p>{description}</p>
                <ul className='d-flex flex-wrap list-unstyled'>{
                  genres?.map((genre, index) => (
                  <li className='pe-3 text-primary' key={index}>{genre}</li>
                  ))}
                </ul>
                <p>Rating: {rating}/10 from {rating_count} users</p>
                <p>start  date: {start_date}</p>
                <p>status: {status}</p>
                <p>total episodes: {episodes?.length}</p>
                <Link to="/*"><button className='btn btn-primary'><i className="bi bi-play-fill"></i>Play</button></Link>
            </div>
        </div>

        <div className='d-flex flex-wrap pt-5 pb-5'>
          {seasons.map(season => (
            <div key={season}>
              <h2>Temporada {season}</h2>
              <ul>
                {episodes.filter(episode => episode.season === season).map((episode,index) => (
                    <Link to="/*" key={index}>
                      <li className="px-2">{index+1}- {episode.name}</li>
                    </Link>
                    ))} 
              </ul>
            </div>
          ))}
       </div>
    </>
  );
};

export default Details;
