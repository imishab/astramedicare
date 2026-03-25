import React from 'react'

export default function Banner() {
  return (
    <>
    {/* START ABOUT DESIGN AREA */}
    <section
      id="home"
    >
      <div className="container px-4 py-120 md:px-10 md:py-[100px]">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-content-part wow fadeInUp delay-0-2s">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 ">
                Astra Medicare
                <br />
                Where Healthy Skin and Confident Smiles Begin
              </h2>
              <p className="mb-3 md:mb-6 text-sm md:text-base text-gray-600 font-thin">
                Advanced dermatology, aesthetic treatments, and modern dentistry
                in one place, guided by medical expertise, thoughtful planning,
                and care that puts comfort first.
              </p>
              <div
                className="flex flex-col sm:flex-row md:items-center gap-3 md:gap-5 font-sans mt-4"
              >
                {/* Button */}
                <a href="#contact" className="theme-btn inline-block text-center md:text-left w-full md:w-auto">
                  Schedule a Consultation <i className="ri-arrow-right-up-line" />
                </a>
                {/* Divider - Hidden on mobile */}
                <div className="hidden md:block border-l border-gray-300 h-8" />
                {/* Text - Emergency CTA */}
                <div className="text-center sm:text-left md:ml-0">
                  <p className="mb-1 text-xs md:text-sm text-gray-600 font-light">
                    Skin concerns, cosmetic goals, or dental care
                  </p>
                  <a
                    href="#service"
                    className="text-gray-900 font-bold text-xs sm:text-sm md:text-base hover:underline inline-flex items-center gap-1"
                  >
                    Explore Treatments <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-8 md:mt-5">
            <img src="/img/banner-1.png" alt="" className="w-full h-auto" />
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
