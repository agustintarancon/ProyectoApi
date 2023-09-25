import React from 'react';

const Details = ({ShowData}) => {

  const {description, genres, image_path, name, rating, status, start_date, rating_count, episodes } = ShowData;

  return (

      <div className={`container p-0`}>
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
              <img src={image_path} alt={name} className="w-100" />
            </div>
            <div className='col-12 col-md-6 col-lg-6 col-xl-8'>
                <h1>{name}</h1>
                <p>{description}</p>
                <ul className='d-flex list-unstyled'>{
                  genres?.map((genre, index) => (
                  <li className='pe-3 text-primary' key={index}>{genre}</li>
                  ))}
                </ul>
                <p>Rating: {rating}/10 from {rating_count} users</p>
                <p>start  date: {start_date}</p>
                <p>status: {status}</p>
                <p>total episodes: {episodes?.length}</p>
                <button className='btn btn-primary'><i className="bi bi-play-fill"></i>Play</button>
            </div>
        </div>

      </div>
  );
};

export default Details;

