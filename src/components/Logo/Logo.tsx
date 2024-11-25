import React from 'react';
import style from './Logo.module.scss';

type Props = {
  text: string;
};

const Logo: React.FC<Props> = ({ text }) => (
  <a href="#" className={style.logo}>
    {text}
  </a>
);

export default Logo;
