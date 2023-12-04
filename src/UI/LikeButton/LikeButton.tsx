import { FC } from 'react';
import style from './LikeButton.module.scss';
import classNames from 'classnames';
import { ILikeButtonProps } from './LikeButtonTypes';

export const LikeButton: FC<ILikeButtonProps> = ({ isDisabled, onClick, isActive }) => {
  return (
    <button
      disabled={isDisabled}
      className={classNames(
        style.likeButton,
        isDisabled && style.likeButton_disabled,
        isActive && style.likeButton_active,
      )}
      onClick={onClick}></button>
  );
};
