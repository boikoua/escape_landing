import { useContext } from 'react';
import { categories } from '../../api/categories';
import style from './Categories.module.scss';
import { EscapeContext } from '../../App';

const Categories = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { selectCategory, setSelectCategory } = context;

  const showCategories = categories.map((category) => (
    <li key={category.id} className={style.item}>
      <a
        className={`${style.link} ${
          selectCategory === category.title ? style.active : ''
        }`}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setSelectCategory(category.title);
        }}
      >
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
