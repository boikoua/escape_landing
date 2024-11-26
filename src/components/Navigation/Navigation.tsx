import { navigationLinks } from '../../api/navigationLinks';
import style from './Navigation.module.scss';

type Props = {
  onOpen: () => void;
};

const Navigation: React.FC<Props> = ({ onOpen }) => {
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
        onClick={onOpen}
      />

      <nav className={style.nav}>
        <ul className={style.items}>{showLinks}</ul>
      </nav>
    </>
  );
};

export default Navigation;
