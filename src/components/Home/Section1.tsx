import React from 'react'

export default function Section1() {
  return (
    <section
    id="resume"
    className="resume-area"
    style={{ backgroundColor: "white" }}
  >
    <div className="container py-100">
      <div className="resume-items">
        <div className="row g-0">
          {/* START EXPERIENCE RESUME DESIGN AREA */}
          <div className="col-xl-6 col-md-12">
            <img src="/img/Image-1.png" alt="" />
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="experience-list">
              <div className="single-resume">
                <p style={{ textTransform: "uppercase", marginTop: 40 }}>
                  Your dentist is here to help
                </p>
                <h2 style={{ fontSize: 35 }}>
                  A healthier smile without the hassle
                </h2>
                <p className="mt-3">
                  Our team treats you as a whole person, not just a set of teeth.
                  Your mouth is a window to overall health, and we look for and
                  teach you about signs indicating broader health issues.
                </p>
                <div className="mt-3 d-flex gap-2">
                  <a href="contact.html" className="theme-btn">
                    Our Doctors <i className="ri-arrow-right-up-line" />
                  </a>
                  <a href="contact.html" className="theme-btn-outline">
                    About the Clinic <i className="ri-arrow-right-up-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* // END EDUCATION RESUME DESIGN AREA */}
        </div>
      </div>
    </div>
  </section>
  
  )
}
