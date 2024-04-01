import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/assets/logo.jpg";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");

  return (
    <>
      <header className="header">
        <nav className=" nav">
          <div class="logo">
            <img src={Logo} alt="logo" className="logo-img" />
            <span className="logo-text">WisdomWagon</span>
          </div>
          <ul className="nav-list">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="selected-page">
              <Link to={"/course"} className="nav-link">
                Courses
              </Link>
            </li>
            <li>
              <Link to={"/community"} className="nav-link">
                Community
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <div className="btn-box">
            <Link to='/cart'>
            <button className="btn">Cart</button>
            </Link>  
            {localStorage.getItem('auth-token')?
            <button className="btn , log" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
            <Link to='/login'>           
            <button className="btn , log"> 
             Login       
            </button>
            </Link>}          
            
            
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
