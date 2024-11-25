import Form from '../Form';
import Title from '../Title';
import style from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <Title text="Stay in Touch" color="#EFEFEF" />
      <Form />
    </section>
  );
};

export default Contacts;
