import { FC } from 'react';
import { ICardState } from './CardTypes';

import style from './Card.module.scss';

import { Button } from '../../UI/Button/Button';
import { LikeButton } from '../../UI/LikeButton/LikeButton';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { addToFavorite, removeFromFavorite } from '../../services/actions/cards';
import { formatePrice } from '../../utils/formatePrice';
import { config } from '../../utils/constants';

export const Card: FC<ICardState> = ({ card }) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((store) => store?.cards?.favoritetItems.indexOf(card) !== -1);
  // console.log(isFavorite);

  const handleToggleFavorite = () => {
    isFavorite ? dispatch(removeFromFavorite(card)) : dispatch(addToFavorite(card));
  };

  return (
    <li className={style.card}>
      <img
        src={config.baseUrl + card.img_src}
        alt="Автомобиль"
        className={`${style.card__image} + ${!card.availability && style.card__image_disabled}`}
      />

      {!card.availability && (
        <div className={style.card__overlay}>
          <div className={style.card__notification}>
            <span>Нет в наличии</span>
          </div>
        </div>
      )}

      <h3 className={style.card__name}>
        {card.brand} {card.model}
      </h3>
      <div className={style.card__description}>
        <p>{card.model_year}</p>
        <p>Цвет: {card.color}</p>
      </div>
      <h4 className={style.card__price}>от ${formatePrice(card.price)}</h4>
      <div className={style.card__buttons}>
        <div className={style.card__buttonContainer}>
          <Button isDisabled={!card.availability}>Купить</Button>
        </div>
        <LikeButton
          isDisabled={!card.availability}
          onClick={handleToggleFavorite}
          isActive={isFavorite}
        />
      </div>
    </li>
  );
};
