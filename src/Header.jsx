import React from "react"

export default function Header() {
  return (
    <div>
      <img className="profile-img" src="/images/profile.jpg" />
      <h1 className="profile-name">Susan Dobbs</h1>
      <p className="profile-title">Frontend Developer</p>
      <p className="profile-website">www.sd-portfolio.com</p>
      <div className="btn-container">
        <button className="email btn"><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
        <button className="linkedin btn"><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</button>
      </div>
    </div>
  )
}