import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <a href="https://www.linkedin.com/in/cristian-m-christensen/">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/cris-ch">
                        <i class="fa fa-github-square"></i>
                    </a>
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
                                "Car Enthusiast 🏎",
                                2000,
                                "Tech Fan 📱",
                                2000,
                            ]}
                            />
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}


