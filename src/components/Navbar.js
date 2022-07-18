import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Navbar({ Token, setToken }) {
  const navigate = useNavigate()
  const onLogoclick = () => {
    if (Token !== "") {
      navigate("/application");
    }
  }
  const onLogoutClick = () => {
    setToken("")
    navigate("/")
    console.log("logout")
  }
  useEffect(() => {
    if (Token === "") {
      navigate("/signin")
    }
  }, [Token, navigate]);
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div href='/' className="navbar-brand">DaaS - New Account Setup</div>
          <form className="d-flex">
        {Token===""?null:<div className='btn btn-dark' onClick={onLogoutClick}>Logout</div>}
            <img className='logo' onClick={onLogoclick} src="./sanovo.png" alt="Logo" />
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar