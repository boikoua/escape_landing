import { Link, useParams } from 'react-router-dom';
import { Post } from '../../types/Posts';
import style from './PostDetails.module.scss';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

type Props = {
  posts: Post[];
};

const PostDetails: React.FC<Props> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (!post) {
    return <div>Post don't find</div>;
  }

  const { image, title, mainContent, authorPhoto, authorName, date } = post;

  return (
    <div className={style.overlay}>
      <article className={style.post}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Link to="/">
              <img
                className={style.close}
                src="./img/icons/close-black.svg"
                alt="Close"
              />
            </Link>

            <img className={style.img} src={image} alt={title} />
            <h2 className={style.title}>{title}</h2>
            <p className={style.content}>{mainContent}</p>
            <div className={style.info}>
              <img className={style.photo} src={authorPhoto} alt={authorName} />
              <span>{authorName}</span>
            </div>
            <span>{date}</span>
          </>
        )}
      </article>
    </div>
  );
};

export default PostDetails;
