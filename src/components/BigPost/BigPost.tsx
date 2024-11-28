import React from 'react';
import { Post } from '../../types/Posts';
import style from './BigPost.module.scss';
import { month } from '../../api/month';
import { Link } from 'react-router-dom';

type Props = {
  post: Post;
};

const BigPost: React.FC<Props> = ({ post }) => {
  const { id, image, title, content, authorPhoto, authorName, date } = post;

  const prepareDate = date.split('-').map((num) => +num);

  const showDate = `${month[prepareDate[1] - 1]} ${prepareDate[2]}, ${
    prepareDate[0]
  }`;

  return (
    <Link
      to={`/${id}`}
      className={style.post}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{content}</p>
      <div className={style.info}>
        <div className={style.author}>
          <img className={style.photo} src={authorPhoto} alt="Photo" />
          <span className={style.name}>{authorName}</span>
        </div>
        <span className={style.date}>{showDate}</span>
      </div>
    </Link>
  );
};

export default BigPost;
