import React, { FC, ReactNode } from 'react'
import s from './Button.module.scss'

interface IButton {
  children: ReactNode
  active?: boolean
  onClick: () => void
}

export const Button: FC<IButton> = ({ children, onClick, active }) => {

  console.log(active)
  return (
    <button className={`${s.button} ${active ? s.active : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};
