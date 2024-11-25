import style from './LittlePost.module.scss';

const LittlePost = () => {
  return (
    <article className={style.post}>
      <img
        className={style.poster}
        src="./public/img/little_post/1.png"
        alt="Poster"
      />
      <div className={style.content}>
        <h4 className={style.title}>Still Standing Tall</h4>
        <p className={style.text}>
          Life begins at the end of your comfort zone.
        </p>
      </div>
      <div className={style.info}>
        <div className={style.author}>
          <img
            className={style.photo}
            src="./public/img/little_post/author.png"
            alt="Photo"
          />
          <span className={style.name}>William Wong</span>
        </div>
        <span className={style.date}>9/25/2015</span>
      </div>
    </article>
  );
};

export default LittlePost;
