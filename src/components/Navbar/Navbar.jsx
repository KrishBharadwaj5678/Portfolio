import "./Navbar.css";
import logo from "../../assets/logo.svg"
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
function Navbar() {

  let [menu, setMenu] = useState("home");
  let menuRef = useRef();

  let openMenu = () => {
    menuRef.current.style.right="0";
  }

  let closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" className="w-14 h-14 md:w-12 md:h-12" />
        <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu}/>
          <li>
            <AnchorLink className="anchor-link" offset={20} href="#home">
              <p onClick={(()=>setMenu("home"))}>Home
              </p>{menu==="home"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={20} href="#about">
              <p onClick={(()=>setMenu("about"))}>About Me
              </p>{menu==="about"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={20} href="#services">
              <p onClick={(()=>setMenu("services"))}>Services
              </p>{menu==="services"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={20} href="#certifications">
              <p onClick={(()=>setMenu("certifications"))}>Certifications
              </p>{menu==="certifications"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={20} href="#work">
              <p onClick={(()=>setMenu("work"))}>Portfolio
              </p>{menu==="work"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset={20} href="#contact">
              <p onClick={(()=>setMenu("contact"))}>Contact
              </p>{menu==="contact"?<img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
        </ul>

        <div className="nav-connect"><AnchorLink offset={20} href="#contact">Connect With Me</AnchorLink></div>
      </div>
    </>
  )
}

export default Navbar;
