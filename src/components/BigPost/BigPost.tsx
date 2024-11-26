import style from './BigPost.module.scss';

const BigPost = () => {
  return (
    <article
      className={style.post}
      style={{ backgroundImage: 'url(./img/big_post/1.png)' }}
    >
      <h3 className={style.title}>The Road Ahead</h3>
      <p className={style.text}>
        The road ahead might be paved - it might not be.
      </p>
      <div className={style.info}>
        <div className={style.author}>
          <img
            className={style.photo}
            src="./img/big_post/author.png"
            alt="Photo"
          />
          <span className={style.name}>Mat Vogels</span>
        </div>
        <span className={style.date}>September 25, 2015</span>
      </div>
    </article>
  );
};

export default BigPost;
