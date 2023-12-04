import { FC, useState } from 'react';
import { SORT_MENU_TEXT } from '../../utils/constants';
import style from './Sort.module.scss';
import sort from '../../images/sort.svg';
import { customSort } from '../../utils/sort';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { setResultCards, setSortOption } from '../../services/actions/catalog';

export const Sort: FC = () => {
  const dispatch = useAppDispatch();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const sortOption = useAppSelector((store) => store?.catalog.sortOption);
  const resultCards = useAppSelector((store) => store?.catalog.resultCards);

  const handleSort = (sortOption: string) => {
    const { sortCards, option } = customSort(sortOption, resultCards);
    setDropdownOpen(false);
    dispatch(setResultCards(sortCards));
    dispatch(setSortOption(option));
  };

  return (
    <div className={style.sort}>
      <button className={style.sort__button} onClick={() => setDropdownOpen(!isDropdownOpen)}>
        <img src={sort} alt={'Cортировка'} className={style.catalog__sortIcon} />
        {sortOption}
      </button>
      {isDropdownOpen && (
        <ul className={style.sort__options}>
          {SORT_MENU_TEXT.map((item) => (
            <li className={style.sort__option} onClick={() => handleSort(item.text)} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
