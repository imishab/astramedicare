import React from 'react'

export default function Team() {
  return (
    <section id="team" className="services-area innerpage-single-area">
    <div className="container">
      <div className="">
        <div className="row mb-4">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center wow fadeInUp delay-0-2s ">
              <p>Meet the doctors</p>
              <h2>Clinical expertise with a patient-first approach</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* START SINGLE SERVICE DESIGN AREA */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <div className="p-2 mb-3">
                <h4 className="mb-1">Dermatology Care</h4>
                <p className="mt-0" style={{ color: "#a8a8a8", fontSize: 13 }}>
                  Diagnosis and treatment for skin health, acne, pigmentation, and rejuvenation
                </p>
              </div>
              <center>
                <img src="/img/doctors/d1.png" width="70%" alt="" />
              </center>
              <br />
              <hr />
              <div className="d-flex justify-content-between align-items-center p-2">
                <span>Doctor profile coming soon</span>
                <div>
                  <i className="ri-facebook-circle-fill" />
                  <i className="ri-instagram-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <div className="p-2 mb-3">
                <h4 className="mb-1">Aesthetic Treatments</h4>
                <p className="mt-0" style={{ color: "#a8a8a8", fontSize: 13 }}>
                  Botox, fillers, PRP, skin boosters, and non-surgical cosmetic care
                </p>
              </div>
              <center>
                <img src="/img/doctors/d2.png" width="70%" alt="" />
              </center>
              <br />
              <hr />
              <div className="d-flex justify-content-between align-items-center p-2">
                <span>Doctor profile coming soon</span>
                <div>
                  <i className="ri-facebook-circle-fill" />
                  <i className="ri-instagram-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item wow fadeInUp delay-0-4s">
              <div className="p-2 mb-3">
                <h4 className="mb-1">Modern Dentistry</h4>
                <p className="mt-0" style={{ color: "#a8a8a8", fontSize: 13 }}>
                  Preventive, cosmetic, and restorative dental treatments for lasting smile health
                </p>
              </div>
              <center>
                <img src="/img/doctors/d3.png" width="70%" alt="" />
              </center>
              <br />
              <hr />
              <div className="d-flex justify-content-between align-items-center p-2">
                <span>Doctor profile coming soon</span>
                <div>
                  <i className="ri-facebook-circle-fill" />
                  <i className="ri-instagram-line" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
        <center>
          <a href="#contact" className="theme-btn mt-4">
            Book a Consultation <i className="ri-arrow-right-up-line" />
          </a>
        </center>{" "}
        <br />
        <br />
        <br />
      </div>
    </div>
  </section>
  
  )
}
