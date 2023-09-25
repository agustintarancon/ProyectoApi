import React from 'react';

const Details = ({ShowData}) => {

  const {description, genres, image_path, name, rating, status, start_date } = ShowData;

  return (

      <div className='container-fluid d-flex p-0'>
        <img src={image_path} alt={name} />
        <div className='p-3'>
          <h1>{name}</h1>
          <p>{description}</p>
          <ul className='d-flex list-unstyled'>{
            genres?.map((genre, index) => (
            <li className='pe-3 text-primary' key={index}>{genre}</li>
            ))}
          </ul>
          <p>Calification: {rating}/10</p>
          <p>start  date: {start_date}</p>
          <p>status: {status}</p>
        </div>
      </div>
  );
};

export default Details;