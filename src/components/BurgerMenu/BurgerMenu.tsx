import { useContext } from 'react';
import { navigationLinks } from '../../api/navigationLinks';
import Logo from '../Logo';
import style from './BurgerMenu.module.scss';
import { EscapeContext } from '../../App';

const BurgerMenu = () => {
  const context = useContext(EscapeContext);

  if (!context) {
    return null;
  }

  const { isOpen, setIsOpen } = context;

  const showLinks = navigationLinks.map((link) => (
    <li key={link.id} className={style.item}>
      <a
        className={style.link}
        href={`#${link.title}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {link.title}
      </a>
    </li>
  ));

  return (
    <section className={`${style.burger} ${isOpen ? style.open : ''}`}>
      <div className="container">
        <div className={style.top}>
          <Logo text="Escape." />

          <img
            className={style.close}
            src="./img/icons/close.svg"
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className={style.bottom}>
          <ul className={style.items}>{showLinks}</ul>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
