import React from 'react'

export default function Banner() {
  return (
    <>
    {/* START ABOUT DESIGN AREA */}
    <section
      id="about"
      className="py-120 md:py-120 lg:py-[180px]"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <h2>Healthy teeth, happy life. Let us keep you smiling.</h2>
              <p className="mb-2">
                We provide personalized dental care to ensure your smile stays
                healthy and confident every day.
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  fontFamily: "Arial, sans-serif",
                }}
                className=""
              >
                {/* Button */}
                <a href="contact.html" className="theme-btn">
                  Schedule Appointment <i className="ri-arrow-right-up-line" />
                </a>
                {/* Divider */}
                <div style={{ borderLeft: "1px solid #d1d5db", height: 30 }} />
                {/* Text */}
                <div>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#6b7280" }}>
                    Emergency? Need to come ASAP?
                  </p>
                  <a
                    href="#"
                    style={{
                      color: "#1f2937",
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    Click Here →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5">
            <img src="/img/banner-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className="video-banner">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src="/videos/banner-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  </>
  
  )
}
