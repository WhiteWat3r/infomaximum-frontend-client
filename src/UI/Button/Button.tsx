import { FC } from 'react';
import style from './Button.module.scss'
import { IButtonProps  } from './ButtonTypes';
import classNames from 'classnames';

export const Button: FC<IButtonProps > = ({children, isDisabled}) => {
    return (
      <button disabled={isDisabled} className={classNames(style.button, isDisabled ? style.button_inactive : '')}>
        {children}
      </button>
    )
  }
  