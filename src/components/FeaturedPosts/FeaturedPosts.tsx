import { useContext } from 'react';
import BigPost from '../BigPost';
import Title from '../Title';
import style from './FeaturedPosts.module.scss';
import { EscapeContext } from '../../App';

const FeaturedPosts = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { filteringPosts } = context;

  const showPosts = filteringPosts
    .filter((post) => post.favorite)
    .map((post) => <BigPost post={post} key={post.id} />);

  return (
    <section id="posts">
      <Title text="Featured Posts" />

      <section className={style.posts}>{showPosts}</section>
    </section>
  );
};

export default FeaturedPosts;
