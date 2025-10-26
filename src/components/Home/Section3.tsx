import React from 'react'

export default function Section3() {
  return (
    <section id="resume" className="resume-area ">
    <div className="container py-100">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6">
          <div className="position-relative text-center">
            <img
              src="/img/image-3.png"
              className="img-fluid rounded"
              alt="Healthy Face"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="col-lg-6 mt-4 mt-lg-0" style={{ padding: 50 }}>
          <h2 className=" mb-3" style={{ fontSize: 35 }}>
            Everything you need <br /> for a healthy Face
          </h2>
          <p className="mb-2">We’re putting your comfort first</p> <br />
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center">
              <i className="ri-check-double-line text-success me-2" /> Modern
              technology
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center">
              <i className="ri-check-double-line text-success me-2" /> Friendly
              team you can call friends
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center">
              <i className="ri-check-double-line text-success me-2" /> Sedation
              dentistry to help you relax
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center">
              <i className="ri-check-double-line text-success me-2" /> We accept
              many insurance plans and offer discounts
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center">
              <i className="ri-check-double-line text-success me-2" /> We use
              energy-saving and waste-reducing methods
            </li>
          </ul>
          <br />
          <p className="mt-2 text-muted">...and much more!</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
