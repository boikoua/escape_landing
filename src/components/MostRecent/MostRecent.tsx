import LittlePost from '../LittlePost';
import Title from '../Title';
import style from './MostRecent.module.scss';

const MostRecent = () => {
  return (
    <section>
      <Title text="Most Recent" />

      <section className={style.posts}>
        <LittlePost />
        <LittlePost />
        <LittlePost />
        <LittlePost />
      </section>
    </section>
  );
};

export default MostRecent;
