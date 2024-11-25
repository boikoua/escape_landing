import FeaturedPosts from '../FeaturedPosts';
import MostRecent from '../MostRecent';
import style from './PostList.module.scss';

const PostList = () => {
  return (
    <section className={style.posts}>
      <div className="container">
        <FeaturedPosts />
        <MostRecent />
      </div>
    </section>
  );
};

export default PostList;
