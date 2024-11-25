import Categories from '../Categories';
import PostList from '../PostList';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main}>
      <Categories />
      <PostList />
    </main>
  );
};

export default Main;
