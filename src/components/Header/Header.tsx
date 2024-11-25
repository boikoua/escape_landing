import Logo from '../Logo';
import Navigation from '../Navigation';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <section className={style.top}>
          <Logo text="Escape." />
          <Navigation />
        </section>
      </div>
    </header>
  );
};

export default Header;
