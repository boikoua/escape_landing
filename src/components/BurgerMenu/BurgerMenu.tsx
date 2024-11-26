import { navigationLinks } from '../../api/navigationLinks';
import Logo from '../Logo';
import style from './BurgerMenu.module.scss';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

const BurgerMenu: React.FC<Props> = ({ isOpen, onOpen }) => {
  const showLinks = navigationLinks.map((link) => (
    <li key={link.id} className={style.item}>
      <a className={style.link} href={`#${link.title}`} onClick={onOpen}>
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
            onClick={onOpen}
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
