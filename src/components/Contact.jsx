import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Contact() {
  const formRef = useRef();
  const [getMesaage, setgetMesaage] = useState(false);

  const handleNameInput = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cdjgpq2",
        "template_2t6rlxz",
        formRef.current,
        "374ckPqpGcJTOGKQu"
      )
      .then(
        (result) => {
          setgetMesaage(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <hr />
      <div className={styles.c}>
        <div className={styles.c_side_bar}></div>

        {/* Left section ============== */}
        <div className={styles.c_left}>
          <h2 className={styles.c_left_title}>Let's discuss your project</h2>
          <div className={styles.c_left_contacts}>
            {/* phone contact -------- */}
            <div className={styles.c_left_contacts_slice}>
              <div className={styles.contacts_slice_icon}>
                <img src={phone} alt="" />
              </div>
              <div className={styles.contacts_slice_data}>+2-01017455239</div>
            </div>

            {/* email contact -------- */}
            <div className={styles.c_left_contacts_slice}>
              <div className={styles.contacts_slice_icon}>
                <img src={mail} alt="" />
              </div>
              <div className={styles.contacts_slice_data}>
                ahmed.mohamed.elsharkawy4@gmail.com
              </div>
            </div>

            {/* linkedin contact -------- */}
            <div className={styles.c_left_contacts_slice}>
              <div className={styles.contacts_slice_icon}>
                <img src={linkedin} alt="" />
              </div>
              <div className={styles.contacts_slice_data}>
                https://www.linkedin.com/in/ahmed-elsharkawy-918867166/
              </div>
            </div>

            {/* Github contact -------- */}
            <div className={styles.c_left_contacts_slice}>
              <div className={styles.contacts_slice_icon}>
                <img src={github} alt="" />
              </div>
              <div className={styles.contacts_slice_data}>
                https://github.com/ahmed-elsharkawy
              </div>
            </div>
          </div>
        </div>

        {/* Right section ============== */}
        <div className={styles.c_right}>
          <form onSubmit={handleSubmit} ref={formRef} action="">
            <input
              className={styles.c_right_input}
              type="text"
              placeholder="name"
              name="user_name"
              onChange={handleNameInput}
            />
            <input
              className={styles.c_right_input}
              type="text"
              placeholder="email"
              name="user_email"
            />
            <input
              className={styles.c_right_input}
              type="text"
              placeholder="subject"
              name="user_subject"
            />
            <textarea
              className={styles.c_right_textArea}
              placeholder="message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className={styles.c_right_submit}>Submit</button>
          </form>
          {getMesaage && (
            <div className={styles.getMessage}>
              Thank you for your message ...
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
