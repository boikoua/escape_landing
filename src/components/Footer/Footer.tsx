import Contacts from '../Contacts';
import Logo from '../Logo';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <Contacts />
      </div>
      <div className={style.bottom}>
        <div className="container">
          <Logo text="Escape." />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
