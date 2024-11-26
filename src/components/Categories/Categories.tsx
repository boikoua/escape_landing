import { categories } from '../../api/categories';
import style from './Categories.module.scss';

const Categories = () => {
  const showCategories = categories.map((category) => (
    <li key={category.id} className={style.item}>
      <a className={style.link} href="#">
        {category.title[0].toUpperCase() + category.title.slice(1)}
      </a>
    </li>
  ));

  return (
    <section className={style.categories} id="categories">
      <div className="container">
        <ul className={style.items}>{showCategories}</ul>
      </div>
    </section>
  );
};

export default Categories;
