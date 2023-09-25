import React from 'react';
import style from './Cards.module.css';

const Cards = ({Nombre,Img}) => {
  return (
    <Link to="/details">
    <li className={style.Cards}>
        <img className={style.CardsImg} width={179} height={250}src={Img} alt={Nombre} />
        <div>{Nombre}</div>
    </li>
    </Link>
  );
};

export default Cards;