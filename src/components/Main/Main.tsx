import { useContext } from 'react';
import Categories from '../Categories';
import PostList from '../PostList';
import style from './Main.module.scss';
import { EscapeContext } from '../../App';
import Loader from '../Loader';

const Main = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { isLoading } = context;

  return (
    <main className={style.main}>
      <Categories />
      {isLoading ? <Loader /> : <PostList />}
    </main>
  );
};

export default Main;
