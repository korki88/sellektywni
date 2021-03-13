import React from "react";

export default function oldNavigation()  {

  return (

    <nav className="Navigation">

      <div className="nav-wrapper nav-switchGenderCat">
        <div className="nav-links"> 
          <div className="nav-link catShe">
            <i className="fas fa-venus"></i>
          </div>
          <div className="nav-link catHe">
            <i className="fas fa-mars"></i>
          </div>
        </div>
      </div>

      <div className="nav-wrapper nav-switchType">
        <div className="nav-links">
          <div className="nav-link catCogs">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="nav-link catLog">
            <i className="fas fa-sign-out-alt"></i>
          </div>
          <div className="nav-link catSh">
            <span>Second Hand</span>
          </div>
          <div className="nav-link catOut">
          <span>Outlet</span>
          </div>
          <div className="nav-link catVin">
          <span>Vintage</span>
          </div>
        </div>
      </div>

      <div className="nav-wrapper nav-mainNav">
        <div className="nav-links">
          <div className="nav-link catShe">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="nav-link catHe">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="nav-link catShe">
            <i className="fas fa-home"></i>
          </div>
          <div className="nav-link catHe">
            <i className="fas fa-file-alt"></i>
          </div>
          <div className="nav-link catShe">
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>

      <div className="nav-wrapper nav-basket">
        <div className="nav-links">
          <div className="nav-link catShe">
            <i className="fas fa-shopping-basket"></i>
          </div>
        </div>
      </div>

    </nav>
  );
  }