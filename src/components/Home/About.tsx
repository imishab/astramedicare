import React from 'react'

export default function About() {
  return (
    <section className="about-section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <div className="about-tag-container">
            <div className="about-line" />
            <span className="about-tag">About Us</span>
            <div className="about-line" />
          </div>
          <h1 className="main-heading">
            A healthier smile
            <br />
            without the hassle
          </h1>
          <p className="description">
            Our clinic provides the best level of care — from checkups and
            cleanings to fillings, teeth-whitening procedures, porcelain veneers,
            crowns, bridges, dentures, dental implants, emergency care, and more;
            we're well-equipped to help.
          </p>{" "}
          <br />
          <a href="contact.html" className="theme-btn mt-4">
            Learn More <i className="ri-arrow-right-up-line" />
          </a>
        </div>
      </div>
    </div>
    {/* Floating profile circles */}
    <div className="profile-circle floating-profile profile-1">
      <img src="/img/user1.png" alt="Profile 1" />
    </div>
    <div className="profile-circle floating-profile profile-2">
      <img src="/img/user2.png" alt="Profile 2" />
    </div>
    <div className="profile-circle floating-profile profile-3">
      <img src="/img/user3.png" alt="Profile 3" />
    </div>
    <div className="profile-circle floating-profile profile-4">
      <img src="/img/user1.png" alt="Profile 4" />
    </div>
  </section>
  
  )
}
