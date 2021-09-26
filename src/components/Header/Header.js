import React from 'react';
import './header.css'

const Header = () => {
    return (

    <div className="">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="?#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjFbLT6d953MEOrcu6QYpNHVlALGQItq5h_uhxW9KLoHXTSWze-QCF39hiIDKRypBL38&usqp=CAU" alt="" width='50' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="?#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="?#">SERVICE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="?#">TRUSTEE</a>
              </li>
            
            
            </ul>
            <form className="d-flex flex-md mx-5">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-warning btn-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* hero Card */}

      <div className="header">
        <p className="job-title">FULSHAIND WELFARE ASSOCIATION UK</p>
      <div className="desc text-dark">
        <p className='.bg-dark bg-gradient text-light'>Donation Amount : £ <small className='text-dark'>47358.03</small></p>
      </div>
        <p className="job-title text-dark">COVID-19 RELIEF SUPPORT FOR BANGLADESH DONATION  PROGRAME 2020</p>
      </div>
    </div>
      
        
    );
};

export default Header;