import { useContext } from 'react';
import LittlePost from '../LittlePost';
import Title from '../Title';
import style from './MostRecent.module.scss';
import { EscapeContext } from '../../App';

const MostRecent = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { filteringPosts } = context;

  const showPosts = filteringPosts.map((post) => (
    <LittlePost key={post.id} post={post} />
  ));

  return (
    <section>
      <Title text="Most Recent" />

      <section className={style.posts}>{showPosts}</section>
    </section>
  );
};

export default MostRecent;
