import style from './Title.module.scss';

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return <h2 className={style.title}>{text}</h2>;
};

export default Title;
