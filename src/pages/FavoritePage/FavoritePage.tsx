import { FC } from 'react';
import style from './FavoritePage.module.scss';
import { useAppSelector } from '../../services/store';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';

export const FavoritePage: FC = () => {
  const counterFavorite = useAppSelector((store) => store?.cards?.favoritetItems?.length);

  const favoriteList = useAppSelector((store) => store?.cards.favoritetItems);

  return (
    <div className={style.favorite}>
      <h1 className={style.favorite__header}>
        {counterFavorite
          ? `Избранные товары — ${counterFavorite} ${
              [2, 3, 4].includes(counterFavorite % 10) ? 'позиции' : 'позиций'
            }`
          : 'Избранного пока нет'}
      </h1>

      <ul className={style.favorite__list}>
        {favoriteList.map((card) => (
          <FavoriteCard card={card} key={card.id} />
        ))}
      </ul>
    </div>
  );
};
