import "../styles/sections/Contact.css";
import { CiPaperplane } from "react-icons/ci";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { CiMap } from "react-icons/ci";
import { IoMdOpen } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";

import PlainBox from "../components/PlainBox";
import { IconContext } from "react-icons";

function Contact() {
  const sideInfo = [
    {
      icon: <FiMapPin />,
      title: "Our Address",
      desc: "123 Fresh Garden Way, <br /> Healthy District, NY 10001",
    },
    {
      icon: <FiPhone />,
      title: "Call",
      desc: "+1 (555) 123-4567 <br /> <span className='call-box-data'>Mon-Fri: 9am - 10pm</span>",
    },
    {
      icon: <FiMail />,
      title: "Email Support",
      desc: `<div style="display: flex; justify-content: space-between" className='email-box-data'> <span>hello@foodibite.com</span> <span style="color: #006e1a;font-weight: 700;" className='reply-tag'>Reply within 24h</span></div>`,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.subject.length === 0 ||
      formData.message.length === 0
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    Swal.fire({
      title: "Success!",
      text: "Your message is already sended",
      icon: "success",

      confirmButtonColor: "#39DB4C",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div className="contact-section section">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have questions about our fresh ingredients or want to book a private
          event? We're here to help you enjoy the best of Foodi.
        </p>
      </div>

      <div onSubmit={handleSendMessage} className="contact-container">
        <form className="contact-form">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">NAME</label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              name="subject"
              id="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  subject: e.target.value,
                });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="text">MESSAGE</label>
            <textarea
              name="text"
              id="text"
              placeholder="Write your message here..."
              value={formData.message}
              rows="5"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  message: e.target.value,
                });
              }}
            />
          </div>

          {error ? (
            <p className="error-message">Please fill all the form </p>
          ) : (
            ""
          )}
          <button type="submit" className="btn-submit">
            Send Message <CiPaperplane />
          </button>
        </form>

        <div className="contact-info-sidebar">
          <div className="info-cards-grid">
            {sideInfo.map((info, index) => (
              <div key={index}>
                <div>{info.icon}</div>
                <h3 dangerouslySetInnerHTML={{ __html: info.title }}></h3>
                <div dangerouslySetInnerHTML={{ __html: info.desc }}></div>
              </div>
            ))}
          </div>

          <div className="map-con">
            <div className="map-placeholder">
              <span className="map-icon">
                <CiMap color="#006e1a" />
              </span>
              <p>Interactive Map Loading...</p>
              <button type="button" className="btn-map">
                OPEN IN GOOGLE MAPS <IoMdOpen size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
