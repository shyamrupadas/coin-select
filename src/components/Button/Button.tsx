import { ReactNode } from 'react';
import s from './Button.module.scss';

interface IButton {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

export function Button({ children, onClick, active }: IButton) {
  return (
    <button
      className={`${s.button} ${active ? s.active : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
