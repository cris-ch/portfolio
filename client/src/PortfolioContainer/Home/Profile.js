import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/cristian-m-christensen/">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/cris-ch">
                <i class="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello World!, I'm <span className="highlighted-text">Cris</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software Engineer 💻",
                    3000,
                    "MotorWorld Aficionado 🏎 🏍",
                    2000,
                    "Tech Enthusiast 📱",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Put something here....
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="cv.pdf" download="Cristian M. Christensen CV.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
