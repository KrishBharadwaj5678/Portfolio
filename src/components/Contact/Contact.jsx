import React from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93334bdb-2085-41e8-ae3f-86168ad8cfc4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const maindata = await response.json();

    if (maindata.success && maindata.data.email.length>0 && maindata.data.message.length>0 && maindata.data.name.length>0) {
      setResult("Email Send Successfully");
      toast.success("Email Sent Successfully");
      event.target.reset();
    } else {
      setResult(maindata.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className='contact' id="contact">
          <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
          </div>

          <div className="contact-section">

            <div className="contact-left">
              <h1>Let's Talk</h1>
              <p>I'm currently available to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime.</p>
              <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="" className='w-7 h-7' />krishbharadwaj50@gmail.com<p></p>
                </div>
                <div className="contact-detail">
                  <img src={call_icon} alt="" className='w-7 h-7'/>+91 7906340248<p></p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="" className='w-7 h-7'/>Mathura, UP, India<p></p>
                </div>
              </div>
            </div>

            <form className='contact-right' onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter your name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" rows={3} placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>

            <ToastContainer />  
          </div>
      </div>
    </>
  )
}

export default Contact