import React from 'react'

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
            </div>
        </div>
    </div>
  )
}
