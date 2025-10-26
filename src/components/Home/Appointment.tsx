import React from 'react'

export default function Appointment() {
  return (
    <section id="contact" className="contact-area " style={{ marginTop: 80 }}>
    <div className="container">
      <div className="">
        <div className="row">
          <div className="col-lg-6">
            <div className=" wow fadeInUp delay-0-2s">
              <img src="/img/contact.png" alt="" />
            </div>
          </div>
          {/* START CONTACT FORM DESIGN AREA */}
          <div className="col-lg-6">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <h1 style={{ fontSize: 50 }} className="mb-4">
                {" "}
                Get Appointment <br />
                From Our Experts
              </h1>{" "}
              <br />
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="/php/form-process.php"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Your Name"
                        required
                        data-error="Please enter your Name"
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Your Email"
                        required
                        data-error="Please enter your Email"
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Your Subject"
                      required
                      data-error="Please enter your Subject"
                    />
                    <label htmlFor="subject" className="for-icon">
                      <i className="far fa-envelope" />
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Your message"
                        required
                        data-error="Please Write your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn w-100 btn-lg"
                        style={{ padding: 20, borderRadius: 50 }}
                      >
                        Send Me Message <i className="ri-mail-line" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* / END CONTACT FORM DESIGN AREA */}
        </div>
      </div>
    </div>
  </section>
  
  )
}
