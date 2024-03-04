import { useState } from "react";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");

  return (
    <>
      <header className="header">
        <nav className=" nav">
          <div class="logo">
            <span className="logo-text">WisdomWagon</span>
          </div>
          <ul className="nav-list">
            <li>Home</li>
            <li className="selected-page">Courses</li>
            <li>Community</li>
            <li>About</li>
          </ul>
          <div className="btn-box">
            <button className="btn">Cart</button>
            <button
              className="btn , log"
              onClick={() => {
                loginbtn === "Login"
                  ? setLoginbtn("Logout")
                  : setLoginbtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
