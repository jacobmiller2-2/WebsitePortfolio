import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import formStyles from "../styles/ContactForm.module.css";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const schema = z.object({
  firstName: z.string().nonempty({ message: "Please enter your first name." }),
  lastName: z.string().nonempty({ message: "Please enter your last name." }),
  email: z.string().nonempty({ message: "Please enter your email." }),
  company: z.string(),
  message: z
    .string()
    .nonempty({ message: "No message to pass along? Please enter a message." }),
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data));
  };

  const renderError = (field) => {
    return field ? <p className={formStyles.error}>{field?.message}</p> : null;
  };
  return (
    <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        name='firstName'
        ref={register}
        placeholder='First Name'
      />
      {renderError(errors.firstName)}

      <input
        type='text'
        name='lastName'
        ref={register}
        placeholder='Last Name'
      />
      {renderError(errors.lastName)}

      <input type='text' name='email' ref={register} placeholder='Email' />
      {renderError(errors.email)}

      <input type='text' name='company' ref={register} placeholder='Company' />
      {renderError(errors.company)}

      <textarea
        className={formStyles.textarea}
        name='message'
        ref={register}
        placeholder='Message...'
      />
      {renderError(errors.message)}

      <input className={formStyles.submit} type='submit' />
    </form>
  );
};

export default ContactForm;
