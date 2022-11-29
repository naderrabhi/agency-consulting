import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./contactform.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, phone, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        phone,
        subject,
        message,
      };

      await emailjs.send(
        "service_1oggn3z",
        "template_ol5nwii",
        templateParams,
        "MaKHUGjpex190Fkcy"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="app___formcontrol section__padding">
      <div className="app__formcontrol-info">
        <p>
          <span>Téléphone:</span> 123 456 789
        </p>
        <p>
          <span>Courriel:</span> agence@gmail.com
        </p>
        <p>
          <span>Adresse:</span> 123 Canada Canada
        </p>
        <iframe
          title="my-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41264620.20332874!2d-130.20251073531466!3d50.85722914099559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2stn!4v1669726362232!5m2!1sen!2stn"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Envoyez-nous un message!</h1>
        <div className="form__input mb-3">
          <input
            type="text"
            name="name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control formInput"
            placeholder="Please enter your name"
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </div>
        <div className="form__input mb-3">
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="form-control formInput"
            placeholder="Please enter your email"
          ></input>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="form__input mb-3">
          <input
            type="number"
            name="phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Please enter your phone number",
              },
              maxLength: {
                value: 30,
                message: "Please use number",
              },
            })}
            className="form-control formInput"
            placeholder="Please enter your phone"
          ></input>
          {errors.phone && (
            <span className="errorMessage">{errors.phone.message}</span>
          )}
        </div>
        <div className="form__input mb-3">
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: { value: true, message: "Please enter a subject" },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="form-control formInput"
            placeholder="Please enter a subject"
          ></input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </div>
        <div className="form__input mb-4">
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="form-control formInput"
            placeholder="Please enter a message"
          ></textarea>
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </div>
        <button className="btn--costum btn--costum_hover" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
