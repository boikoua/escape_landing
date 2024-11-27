import style from './Form.module.scss';

const Form = () => {
  return (
    <form
      className={style.form}
      action=""
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className={style.input}
        type="email"
        placeholder="Enter your email address"
      />
      <button className={style.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
