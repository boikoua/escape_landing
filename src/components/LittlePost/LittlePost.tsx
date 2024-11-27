import React from 'react';
import { Post } from '../../types/Posts';
import style from './LittlePost.module.scss';

type Props = {
  post: Post;
};

const LittlePost: React.FC<Props> = ({ post }) => {
  const { image, title, content, authorPhoto, authorName, date } = post;

  const prepareDate = date.split('-');

  const showDate = `${prepareDate[2]}/${prepareDate[1]}/${prepareDate[0]}`;

  return (
    <article className={style.post}>
      <img className={style.poster} src={image} alt="Poster" />
      <div className={style.content}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{content}</p>
      </div>
      <div className={style.info}>
        <div className={style.author}>
          <img className={style.photo} src={authorPhoto} alt="Photo" />
          <span className={style.name}>{authorName}</span>
        </div>
        <span className={style.date}>{showDate}</span>
      </div>
    </article>
  );
};

export default LittlePost;
