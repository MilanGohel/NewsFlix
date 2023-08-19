import React from 'react'
// import night from './png/night.png'
import { Link } from 'react-router-dom';
import newsLogo from './png/logo-no-background.png'

const NavBar = (props) => {
    return (
        <>
        <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <img src={newsLogo} alt="Logo.." height="40px"/>
          {/* <a href="/" className="navbar-brand" to="/">NewsFilx</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li> */}
              <li className="nav-item active">
                <Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link></li>
              
            </ul>
                <div className="custom-control custom-switch mx-3">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
                    <label className={`custom-control-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="customSwitch1">Dark Mode</label>
                </div>
            <form className="d-flex" role="search">
              
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
      </>
    )
  }
  export default NavBar;

