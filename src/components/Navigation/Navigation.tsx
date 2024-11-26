import { navigationLinks } from '../../api/navigationLinks';
import style from './Navigation.module.scss';

const Navigation = () => {
  const showLinks = navigationLinks.map((link) => (
    <li key={link.id} className={style.item}>
      <a className={style.link} href="#">
        {link.title}
      </a>
    </li>
  ));

  return (
    <>
      <img className={style.burger} src="./img/icons/burger.svg" alt="Menu" />

      <nav className={style.nav}>
        <ul className={style.items}>{showLinks}</ul>
      </nav>
    </>
  );
};

export default Navigation;
