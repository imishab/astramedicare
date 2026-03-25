import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "About Astra Medicare",
  description:
    "Learn about Astra Medicare's dermatology, aesthetic, and dental care approach.",
};

const values = [
  {
    title: "Consultation First",
    description:
      "Every visit begins with a conversation so patients can understand treatment choices clearly before moving forward.",
    icon: "ri-message-3-line",
  },
  {
    title: "Comfort and Clarity",
    description:
      "Our clinic is designed to reduce anxiety through calm guidance, honest explanations, and respectful care.",
    icon: "ri-heart-pulse-line",
  },
  {
    title: "Long-Term Results",
    description:
      "We focus on medically sound treatment planning that supports natural outcomes and patient confidence over time.",
    icon: "ri-shield-check-line",
  },
];

const specialties = [
  {
    title: "Dermatology and Skin Care",
    description:
      "Targeted support for acne, pigmentation, melasma, skin texture, rejuvenation, and overall skin health.",
  },
  {
    title: "Aesthetic Treatments",
    description:
      "Botox, fillers, PRP, skin boosters, and advanced non-surgical treatments with a natural, balanced approach.",
  },
  {
    title: "Modern Dentistry",
    description:
      "Preventive, cosmetic, and restorative dental care designed to improve oral health and smile confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="about-area about-page-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="about-content-part text-center wow fadeInUp delay-0-2s">
                  <p className="about-page-kicker">About Astra Medicare</p>
                  <h2>
                    Where healthy skin, confident smiles, and thoughtful care begin
                  </h2>
                  <p className="mb-2 font-light">
                    Astra Medicare is built around a simple belief: when people
                    feel good about their skin and their smile, their confidence
                    changes.
                  </p>
                  <p className="mb-2 font-light">
                    Our clinic brings together advanced dermatology, aesthetic
                    treatments, and modern dentistry in one place. Every
                    treatment is guided by medical expertise, careful planning,
                    and a genuine understanding of what each patient needs.
                  </p>
                  <br />
                  <div className="about-page-actions">
                    <Link href="/#contact" className="theme-btn" style={{ marginRight: "10px" }}>
                      Schedule a Consultation{" "}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                    <Link href="/#service" className="theme-btn-outline">
                      Explore Treatments{" "}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="about-page-hero-visual">
                  <img
                    src="/img/banner-1.png"
                    alt="Astra Medicare"
                    className="about-page-main-image"
                  />
                  <div className="about-page-badge">
                    <h5>Our Promise</h5>
                    <p>
                      No pressure, no rush, and no one-size-fits-all treatment
                      plans.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="about-section about-page-intro" id="about-story">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <div className="about-tag-container">
                  <div className="about-line" />
                  <span className="about-tag font-light">Our Story</span>
                  <div className="about-line" />
                </div>
                <h1 className="main-heading">
                  A different approach
                  <br />
                  to modern clinic care
                </h1>
                <p className="description font-light">
                  Many people delay treatment because they feel unsure or
                  anxious about visiting a clinic. At Astra Medicare, we work to
                  change that experience through clear consultations, careful
                  explanations, and an environment where patients feel informed,
                  respected, and confident in their decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="profile-circle floating-profile profile-1 md:block hidden">
            <img src="/img/user1.png" alt="Patient profile 1" />
          </div>
          <div className="profile-circle floating-profile profile-2 md:block hidden">
            <img src="/img/user2.png" alt="Patient profile 2" />
          </div>
          <div className="profile-circle floating-profile profile-3 md:block hidden">
            <img src="/img/user3.png" alt="Patient profile 3" />
          </div>
          <div className="profile-circle floating-profile profile-4 md:block hidden">
            <img src="/img/user1.png" alt="Patient profile 4" />
          </div>
        </section>

        <section className="resume-area" style={{ backgroundColor: "white" }}>
          <div className="container py-100">
            <div className="resume-items">
              <div className="row g-0 d-flex align-items-stretch">
                <div className="col-xl-6 col-md-12 d-flex">
                  <img
                    src="/img/Image-1.png"
                    alt="Astra Medicare consultation"
                    className="w-100 object-cover"
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="col-xl-6 col-md-12 d-flex">
                  <div
                    className="experience-list w-100 d-flex align-items-center"
                    style={{
                      height: "100%",
                      borderRadius: 30,
                      backgroundColor: "#F5F2ED",
                      border: "0px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="single-resume w-100">
                      <p
                        style={{ textTransform: "uppercase", marginTop: 0 }}
                        className="font-light"
                      >
                        Patient-centered care
                      </p>
                      <h2 style={{ fontSize: 35 }}>
                        Treatment that begins
                        <br />
                        with listening
                      </h2>
                      <p className="mt-3 font-light">
                        Every consultation begins with a conversation. We listen
                        carefully, explain possible treatment paths, and make
                        sure patients feel comfortable before any procedure is
                        planned.
                      </p>
                      <p className="mt-3 font-light">
                        Whether someone visits us for skin concerns, cosmetic
                        improvements, or dental care, the goal remains the same:
                        thoughtful treatment that prioritizes comfort, clarity,
                        and long-term results.
                      </p>
                      <div className="mt-3 d-flex gap-2 flex-wrap">
                        <Link href="/#team" className="theme-btn">
                          Meet Our Doctors{" "}
                          <i className="ri-arrow-right-up-line" />
                        </Link>
                        <Link href="/#contact" className="theme-btn-outline">
                          Book a Visit <i className="ri-arrow-right-up-line" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="about-page-quote-section">
          <div className="container">
            <div className="about-page-quote-card">
              <div className="icon">
                <img src="/img/element-1.png" width="20" alt="Quote icon" />
              </div>
              <p className="quote-text">
                &ldquo;The best outcomes happen when patients feel informed,
                relaxed, and confident throughout their care.&rdquo;
              </p>
              <p className="quote-author">Astra Medicare</p>
            </div>
          </div>
        </section> */}

        <section id="about-values" className="services-area innerpage-single-area">
          <div className="container">
            <div className="row mb-4">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Why patients choose us</p>
                  <h2>Care that feels clear, calm, and professional</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {values.map((value) => (
                <div className="col-lg-4 col-md-6" key={value.title}>
                  <div className="service-item wow fadeInUp delay-0-4s about-page-card">
                    <div className="about-page-card-icon" style={{ color: "#652d02ff", fontSize: "3rem", padding: "20px 1px 20px 1px" }}>
                      <i className={value.icon} />
                    </div>
                    <h4>{value.title}</h4>
                    <p className="font-light">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skill-area" style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <h2>Our Areas of Expertise</h2>
                  <p className="font-light">
                    Advanced care across skin, aesthetics, and dentistry under
                    one roof.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {specialties.map((item) => (
                <div className="col-lg-4 col-sm-6 col-xs-12" key={item.title}>
                  <div className="skill-item wow fadeInUp delay-0-2s">
                    <div className="about-page-skill-icon" style={{ color: "#652d02ff", fontSize: "3rem", padding: "20px 1px 20px 1px" }}>
                      <i className="ri-check-double-line" />
                    </div>
                    <h5>{item.title}</h5>
                    <p className="font-light mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-area about-page-cta bg-[#fff5edff]">
          <div className="container mt-100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="wow fadeInUp delay-0-2s">
                  <img src="/img/contact.png" alt="Contact Astra Medicare" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form contact-form-area wow fadeInUp delay-0-4s about-page-cta-content">
                  <h1 className="mb-4">
                    When you feel ready,
                    <br />
                    we are here to guide you
                  </h1>
                  <p className="font-light">
                    If you are considering skin treatment, aesthetic care, or
                    dental treatment, our team is here to help you take the next
                    step with confidence.
                  </p>
                  <br />
                  <div className="d-flex gap-3 flex-wrap">
                    <Link href="/#contact" className="theme-btn">
                      Schedule Consultation{" "}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                    <Link href="/" className="theme-btn-outline">
                      Back to Home <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
