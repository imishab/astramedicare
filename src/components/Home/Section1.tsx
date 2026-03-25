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
        <div className="row g-0 d-flex align-items-stretch">
          {/* START EXPERIENCE RESUME DESIGN AREA */}
          <div className="col-xl-6 col-md-12 d-flex">
            <img src="/img/Image-1.png" alt="" className="w-100 object-cover" style={{ height: '100%' }} />
          </div>
          <div className="col-xl-6 col-md-12 d-flex">
            <div className="experience-list w-100 bg-[#F5F2ED] rounded-xl d-flex align-items-center" style={{ height: '100%', borderRadius: 30 }}>
              <div className="single-resume w-100">
                <p style={{ textTransform: "uppercase", marginTop: 0 }} className='font-light'>
                  Patient-centered care
                </p>
                <h2 style={{ fontSize: 35 }}>
                  Treatment that begins with listening
                </h2>
                <p className="mt-3 font-light">
                  Many people delay treatment because they feel unsure or
                  anxious. At Astra Medicare, we change that experience through
                  clear consultations, careful explanations, and treatment plans
                  shaped around what is best for each patient.
                </p>
                <div className="mt-3 d-flex gap-2">
                  <a href="#team" className="theme-btn">
                    Our Doctors <i className="ri-arrow-right-up-line" />
                  </a>
                  <a href="#about" className="theme-btn-outline">
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
