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
        <div className="col-lg-6 mt-4 mt-lg-0 p-[50px]">
          <h2 className=" mb-3 " style={{ fontSize: 35 }}>
            Safe, modern care
            <br /> for skin and smile
          </h2>
          <p className="mb-2 font-light">We combine medical standards with a calm, supportive patient experience.</p> <br />
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center font-light">
              <i className="ri-check-double-line text-success me-2" /> Experienced doctors across dermatology, aesthetics, and dentistry
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center font-light">
              <i className="ri-check-double-line text-success me-2" /> Modern equipment chosen for precision, safety, and comfort
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center font-light">
              <i className="ri-check-double-line text-success me-2" /> Strict hygiene standards throughout every consultation and procedure
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center font-light">
              <i className="ri-check-double-line text-success me-2" /> Personalized treatment planning instead of one-size-fits-all solutions
            </li>
            <hr />
            <li className="mb-3 d-flex align-items-center font-light">
              <i className="ri-check-double-line text-success me-2" /> Focus on long-term results, natural outcomes, and patient confidence
            </li>
          </ul>
          <br />
          <p className="mt-2 text-muted font-light">From first consultation to final result, every step is handled with clarity and care.</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
