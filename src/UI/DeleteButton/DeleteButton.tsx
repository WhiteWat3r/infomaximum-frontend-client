import { FC } from 'react';
import style from './DeleteButton.module.scss'
import { IDeleteButtonProps } from './DeleteButtonTypes';

export const DeleteButton: FC<IDeleteButtonProps> = ({onClick}) => {
    return (
      <button className={style.deleteButton} onClick={onClick}>
      </button>
    )
  }
  