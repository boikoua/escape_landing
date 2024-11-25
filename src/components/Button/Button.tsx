import style from './Button.module.scss';

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  return <button className={style.button}>{text}</button>;
};

export default Button;
