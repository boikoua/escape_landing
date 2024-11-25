import Button from '../Button';
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
        <section className={style.bottom}>
          <h1 className={style.title}>Let's do it together.</h1>
          <p className={style.text}>
            We travel the world in search of stories. Come along for the ride.
          </p>
          <Button text="View Latest Posts" />
        </section>
      </div>
    </header>
  );
};

export default Header;
