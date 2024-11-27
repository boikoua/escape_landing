import { useContext } from 'react';
import { navigationLinks } from '../../api/navigationLinks';
import style from './Navigation.module.scss';
import { EscapeContext } from '../../App';

const Navigation = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { isOpen, setIsOpen } = context;

  const showLinks = navigationLinks.map((link) => (
    <li key={link.id} className={style.item}>
      <a className={style.link} href={`#${link.title}`}>
        {link.title}
      </a>
    </li>
  ));

  return (
    <>
      <img
        className={style.burger}
        src="./img/icons/burger.svg"
        alt="Menu"
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav className={style.nav}>
        <ul className={style.items}>{showLinks}</ul>
      </nav>
    </>
  );
};

export default Navigation;
