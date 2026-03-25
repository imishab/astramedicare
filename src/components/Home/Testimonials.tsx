import React from 'react'

const experiences = [
  {
    text: 'Patients often come to us feeling unsure about treatment. They leave feeling informed, comfortable, and confident about the care they received.',
    label: 'Clear communication'
  },
  {
    text: 'Our approach is designed to reduce anxiety through careful explanations, thoughtful planning, and a clinic experience that never feels rushed.',
    label: 'Comfort-first experience'
  },
  {
    text: 'From skin concerns to smile enhancement, every treatment is planned around long-term results and what genuinely suits the patient.',
    label: 'Personalized treatment'
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="skill-area"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <h2>Patient Experiences</h2>
              <p className="font-light">Care, professionalism, and thoughtful attention are at the heart of every visit.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="skill-items-wrap">
              <div className="row">
                {experiences.map((experience, index) => (
                  <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                    <div className="skill-item wow fadeInUp delay-0-2s" >
                      <br />
                      <i className="ri-star-s-fill h4" style={{ color: "#a45800ff" }} />
                      <i className="ri-star-s-fill h4" style={{ color: "#a45800ff" }} />
                      <i className="ri-star-s-fill h4" style={{ color: "#a45800ff" }} />
                      <i className="ri-star-s-fill h4" style={{ color: "#a45800ff" }} />
                      <i className="ri-star-s-fill h4" style={{ color: "#a45800ff" }} />
                      <br />
                      <br />
                      <p className="font-light">{experience.text}</p>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <img
                          src="/img/testimonials/user1.png"
                          width="15%"
                          alt=""
                        />
                        <p className="mt-2">{experience.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <center>
                <a href="#contact" className="theme-btn mt-4">
                  Start with a Consultation <i className="ri-arrow-right-up-line" />
                </a>
              </center>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
