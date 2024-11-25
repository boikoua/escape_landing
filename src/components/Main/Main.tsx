import Categories from '../Categories';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main}>
      <Categories />
    </main>
  );
};

export default Main;
