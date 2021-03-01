import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/yup";
import * as z from "zod";

import Spinner from "react-bootstrap/Spinner";

import formStyles from "../styles/ContactForm.module.css";
import axios from "axios";

interface IFormInputs {
  firstName: string;
  lastName: string;
  company: string;
  message: string;
}

// const schema = z.object({
//   firstName: z.string().nonempty({ message: "Please enter your first name." }),
//   lastName: z.string().nonempty({ message: "Please enter your last name." }),
//   company: z.string(),
//   message: z
//     .string()
//     .nonempty({ message: "No message to pass along? Please enter a message." }),
// });

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    // resolver: zodResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    setSubmitting(true);
    (async () => {
      const res = await axios.post("/api/contact", data);
      setSubmitting(false);
    })();
  };

  const renderError = (field) => {
    return field ? <p className={formStyles.error}>{field?.message}</p> : null;
  };
  return (
    <form
      id="contactForm"
      className={formStyles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        ref={register}
        placeholder="First Name"
      />
      {renderError(errors.firstName)}

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        ref={register}
        placeholder="Last Name"
      />
      {renderError(errors.lastName)}

      <label htmlFor="company">Company</label>
      <input type="text" name="company" ref={register} placeholder="Company" />
      {renderError(errors.company)}

      <label htmlFor="message">Message</label>
      <textarea
        className={formStyles.textarea}
        name="message"
        ref={register}
        placeholder="Message..."
      />
      {renderError(errors.message)}

      {submitting ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <input className={formStyles.submit} type="submit" />
      )}
    </form>
  );
};

export default ContactForm;
