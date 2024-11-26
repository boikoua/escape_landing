import React from 'react';
import style from './Logo.module.scss';

type Props = {
  text: string;
};

const Logo: React.FC<Props> = ({ text }) => (
  <a href="#home" className={style.logo}>
    {text}
  </a>
);

export default Logo;
