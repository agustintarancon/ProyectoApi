import React from 'react';
import style from './Cards.module.css';
import { Link} from 'react-router-dom';

const Cards = ({Nombre,Img, id}) => {
  return (
      <Link to={`/details/${id}`} className='text-decoration-none text-black'>
    <li className={style.Cards}>
        <img className={style.CardsImg} width={179} height={250}src={Img} alt={Nombre} />
        <div>{Nombre}</div>
    </li>
      </Link>
  );
};

export default Cards;