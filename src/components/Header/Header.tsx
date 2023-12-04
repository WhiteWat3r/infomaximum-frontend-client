import { FC } from 'react';
import style from './Header.module.scss';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { TiHeartFullOutline } from 'react-icons/ti';
import { Button } from '../../UI/Button/Button';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="Логотип КупиАвто" className={style.header__logo} />

      <Link to="/catalog" className={style.header__navButton}>
        <Button>☰ Каталог</Button>
      </Link>

      <ul className={style.header__contactBlock}>
        <li>Москва, Волгоградский пр-кт, 43, стр 1</li>
        <li>+7 800 555 35 35</li>
      </ul>
      <Link to="/favorites" className={style.header__link}>
        <TiHeartFullOutline size={30} color="#4F2CD9" />
        <h4 className={style.header__favoriteLink}>Избранное</h4>
      </Link>
    </header>
  );
};



