import BigPost from '../BigPost';
import Title from '../Title';
import style from './FeaturedPosts.module.scss';

const FeaturedPosts = () => {
  return (
    <section id="about">
      <Title text="Featured Posts" />

      <section className={style.posts}>
        <BigPost />
        <BigPost />
      </section>
    </section>
  );
};

export default FeaturedPosts;
