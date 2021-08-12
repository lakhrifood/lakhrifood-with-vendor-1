import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/vendor/Footer/Footer";
const Contact = () => {
  const [contact, setcontact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showDone, setshowDone] = useState(false);

  const submitQue = async () => {
    await axios.post("http://localhost:5000/contact", contact);
    console.log(contact, "pikachu");
    setcontact({
      name: "",
      email: "",
      message: "",
    });
    setshowDone(true);
  };

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.contactwrapper}`}>
        <div>
          <h1 className={`h2 ${styles.headerTitle}`}>
            <span className={`${styles.textBlue}`}>Contact</span> Us
          </h1>

          <p>We Can Support You 24 Hours</p>
          {showDone ? (
            <div>
              <h1 className="h1">We have recieved your query</h1>
            </div>
          ) : (
            <div className={`${styles.supportField}`}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  value={contact.name}
                  onChange={(e) =>
                    setcontact({ ...contact, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={contact.email}
                  onChange={(e) =>
                    setcontact({ ...contact, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your message"
                  value={contact.message}
                  onChange={(e) =>
                    setcontact({ ...contact, message: e.target.value })
                  }
                ></textarea>
              </div>

              {contact.name && contact.email && contact.message ? (
                <button className="btn btn-primary" onClick={submitQue}>
                  Submit
                </button>
              ) : (
                <button className="btn btn-primary" disabled>
                  Submit
                </button>
              )}
            </div>
          )}
        </div>
        <div className={styles.secondPart}>
          <div>
            <h1 className={`h2 ${styles.headerTitle}`}>
              <span className={`${styles.textBlue}`}>Get</span> In Touch
            </h1>
            <div className={`${styles.contactInfobox}`}>
              <div className={styles.iconCatcher}>
                <i className="fas fa-mobile"></i>
              </div>
              <p className={styles.det}>018 1010 5049</p>
            </div>
            <div className={`${styles.contactInfobox}`}>
              <div className={styles.iconCatcher}>
                <i className="fas fa-envelope-open"></i>
              </div>
              <p className={styles.det}>Info@lakhrifood.com</p>
            </div>
            <div className={`${styles.contactInfobox}`}>
              <div className={styles.iconCatcher}>
                <i className="fab fa-internet-explorer"></i>
              </div>
              <p className={styles.det}>www.lakhrifood.com</p>
            </div>
          </div>
          <div className={styles.imgPortion}>
            <Image
              width={600}
              height={300}
              src="https://res.cloudinary.com/deifz37dd/image/upload/v1628659804/Group_1992_olzk0i.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
