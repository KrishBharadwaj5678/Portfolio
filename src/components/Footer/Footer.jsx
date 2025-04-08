import React, {useState} from 'react'
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || !emailRegex.test(email)) {
      toast.error('Invalid Email');
    } else {
      toast.success('Subscribed Successfully');
      setEmail(''); 
    }
  }

  return (
    <>
      <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <p>Don’t miss out on important updates and special offers! Subscribe with your email today</p>
          </div>

          <div className="footer-top-right">
            <div className="footer-email-input overflow-hidden">
              <img src={user_icon} alt="" />
              <input type="email" value={email} placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
          </div>
        </div>
        <hr/>

      <ToastContainer />

        <div className="footer-bottom">
             
          <p className="footer-bottom-left">&copy; All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p><AnchorLink offset={20} href="#contact" >Connect with me</AnchorLink></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer