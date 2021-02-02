import { useForm } from "react-hook-form";

import formStyles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        // className={formStyles.input}
        name='firstName'
        ref={register}
        placeholder='First Name'
      />
      <input
        // className={formStyles.input}
        name='lastName'
        ref={register}
        placeholder='Last Name'
      />
      <input
        // className={formStyles.input}
        name='email'
        ref={register}
        placeholder='Email'
      />
      <input
        // className={formStyles.input}
        name='company'
        ref={register}
        placeholder='Company'
      />
      <textarea
        className={formStyles.textarea}
        name='message'
        ref={register}
        placeholder='Message...'
      />
      <input className={formStyles.submit} type='submit' />
    </form>
  );
};

export default ContactForm;
