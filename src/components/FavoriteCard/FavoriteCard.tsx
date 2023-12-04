import { FC } from 'react';
import { ICardState } from '../Card/CardTypes';

import style from './FavoriteCard.module.scss';
import { formatePrice } from '../../utils/formatePrice';
import { Button } from '../../UI/Button/Button';
import { DeleteButton } from '../../UI/DeleteButton/DeleteButton';
import { useAppDispatch } from '../../services/store';
import { removeFromFavorite } from '../../services/actions/cards';
import { config } from '../../utils/constants';

export const FavoriteCard: FC<ICardState> = ({ card }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorite(card));
  };

  return (
    <li className={style.card}>
      <img src={config.baseUrl + card.img_src} alt="Автомобиль" className={style.card__image} />
      <div className={style.card__info}>
        <h2 className={style.card__name}>
          {card.brand} {card.model}
        </h2>
        <p className={style.card__description}>{card.description}</p>
        <p className={style.card__year}>Год: {card.model_year}</p>
        <p className={style.card__color}>Цвет: {card.color}</p>
        <h3 className={style.card__price}>от ${formatePrice(card.price)}</h3>
        <div className={style.card__buttonsBlock}>
          <div className={style.card__buttonContainer}>
            <Button>Выбрать комплектацию</Button>
          </div>
          <DeleteButton onClick={handleRemoveFromFavorites} />
        </div>
      </div>
    </li>
  );
};
