import style from './Title.module.scss';

type Props = {
  text: string;
  color?: string;
};

const Title: React.FC<Props> = ({ text, color }) => {
  return (
    <h2 className={style.title} style={{ color }}>
      {text}
    </h2>
  );
};

export default Title;
