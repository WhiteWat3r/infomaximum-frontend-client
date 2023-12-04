import { FC, useEffect } from 'react';
import style from './CatalogPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { Card } from '../../components/Card/Card';
import { Search } from '../../components/Search/Search';
import { setResultCards } from '../../services/actions/catalog';
import { Sort } from '../../components/Sort/Sort';
import { Loader } from '../../components/Loader/Loader';

export const CatalogPage: FC = () => {
  const cards = useAppSelector((store) => store?.cards?.items);
  const resultCards = useAppSelector((store) => store?.catalog.resultCards);
  console.log(cards.length);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setResultCards(cards));
  }, [cards]);

  return (
    <div className={style.catalog}>
      <div className={style.catalog__sortingBlock}>
        <Sort />
        <Search />
      </div>

      {cards.length > 0 ? (
        <ul className={style.catalog__list}>
          {resultCards?.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
};
