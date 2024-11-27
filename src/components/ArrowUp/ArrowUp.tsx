import style from './ArrowUp.module.scss';

const ArrowUp = () => {
  return (
    <a href="#" className={style.arrow}>
      <img className={style.img} src="./img/icons/arrow.png" alt="ArrowUp" />
    </a>
  );
};

export default ArrowUp;
