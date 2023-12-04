import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';

import style from './Search.module.scss'
import { setResultCards, setSearchText, setSortOption } from '../../services/actions/catalog';
import { customSort } from '../../utils/sort';

export const Search: FC = () => {

    const dispatch = useAppDispatch()

    const cards = useAppSelector((store) => store?.cards?.items);

    const resultCards = useAppSelector((store) => store?.catalog.resultCards);
    const searchText = useAppSelector((store) => store?.catalog.searchText);
    const sortOption = useAppSelector((store) => store?.catalog.sortOption);
    

    const handleFilter = (e: any) => {
        e.preventDefault();
    
        const filteredArray = cards.filter(
          (card) =>
            card.brand.toLowerCase().includes(searchText.toLowerCase()) ||
            card.model_year.toString().includes(searchText),
          console.log('сработал'),
        );
    


        // setSortOption('Сначала в наличии');



        const {sortCards, option} = customSort(sortOption, filteredArray)
        dispatch(setResultCards(sortCards));
        dispatch(setSortOption(option))


      };

      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('aaaa');
        
        dispatch(setSearchText(e.target.value));
      };


  return (
    <form className={style.search} onSubmit={handleFilter}>
      <input
        type={'text'}
        placeholder={'Найти авто'}
        value={searchText}
        onChange={handleSearchChange}
        className={style.search__input}
      />
      <button className={style.search__button} type={'submit'}></button>
    </form>
  ); 
};
