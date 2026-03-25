import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Contact Astra Medicare",
  description:
    "Get in touch with Astra Medicare for dermatology, aesthetic treatments, and dental care.",
};

const contactCards = [
  {
    icon: "ri-phone-line",
    label: "Call Us",
    title: "+99399499339",
    description: "Speak with our team for appointments, treatment questions, and consultation guidance.",
    link: "tel:+99399499339",
    linkLabel: "Call now",
  },
  {
    icon: "ri-mail-line",
    label: "Email Us",
    title: "info@astramedicare.in",
    description: "Send your enquiry and we will get back to you with the right next steps.",
    link: "mailto:info@astramedicare.in",
    linkLabel: "Send email",
  },
  {
    icon: "ri-map-pin-line",
    label: "Visit Us",
    title: "Near Zelebra, Karaparamb, Calicut",
    description: "Conveniently located for consultations, skin care, aesthetic care, and dental visits.",
    link: "https://maps.google.com/?q=Karaparamb,Calicut",
    linkLabel: "Get directions",
  },
];

const supportPoints = [
  "Clear explanations before any treatment plan is confirmed",
  "Comfort-focused care for skin, smile, and aesthetic concerns",
  "Dedicated guidance for first-time consultations",
  "Thoughtful scheduling and patient-friendly support",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="contact-page-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="about-content-part wow fadeInUp delay-0-2s">
                  <p className="contact-page-kicker">Contact Astra Medicare</p>
                  <h2>
                    Let&apos;s help you take
                    <br />
                    the next step with
                    <br />
                    clarity and care
                  </h2>
                  <p className="font-light mb-3">
                    Whether you are planning a consultation for dermatology,
                    aesthetic treatments, or dental care, our team is here to
                    guide you with clarity and care.
                  </p>
                  <p className="font-light mb-3">
                    Reach out to book a visit, ask a question, or discuss the
                    treatment you are considering.
                  </p>
                  <div className="contact-page-actions">
                    <a href="tel:+99399499339" className="theme-btn">
                      Call the Clinic <i className="ri-arrow-right-up-line" />
                    </a>
                    <a href="mailto:info@astramedicare.in" className="theme-btn-outline">
                      Email Us <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="contact-page-hero-visual wow fadeInUp delay-0-4s">
                  <img src="/img/contact.png" alt="Contact Astra Medicare" />
                  {/* <div className="contact-page-floating-note">
                    <p>Dermatology</p>
                    <p>Aesthetics</p>
                    <p>Dentistry</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section contact-page-intro">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <div className="about-tag-container">
                  <div className="about-line" />
                  <span className="about-tag font-light">Reach Us Easily</span>
                  <div className="about-line" />
                </div>
                <h1 className="main-heading contact-page-main-heading">
                  We make it easy to ask,
                  <br />
                  book, and visit
                </h1>
                <p className="description font-light">
                  From the first enquiry to your clinic visit, our team focuses
                  on making the experience simple, informative, and comfortable.
                  Reach out in the way that feels easiest for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="services-area contact-page-cards-section">
          <div className="container">
            <div className="row">
              {contactCards.map((card) => (
                <div className="col-lg-4 col-md-6" key={card.title}>
                  <div className="service-item about-page-card contact-page-info-card wow fadeInUp delay-0-2s">
                    <div className="about-page-card-icon contact-page-card-icon">
                      <i className={card.icon} />
                    </div>
                    <p className="contact-page-card-label">{card.label}</p>
                    <h4 className="contact-page-card-title">{card.title}</h4>
                    <p className="font-light">{card.description}</p>
                    <a href={card.link} className="contact-page-link" target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noreferrer" : undefined}>
                      {card.linkLabel} <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="resume-area contact-page-main">
          <div className="container">
            <div className="row align-items-stretch g-0 contact-page-main-wrap">
              <div className="col-lg-5">
                <div className="single-resume contact-page-side h-100">
                  <p className="contact-page-side-kicker">Visit the clinic</p>
                  <h3 className="">
                    Calm, patient-friendly support from your first enquiry
                  </h3>
                  <p className="font-light">
                    We know that many people feel unsure before booking skin,
                    aesthetic, or dental treatment. Our goal is to make the
                    first step feel simple, informed, and comfortable.
                  </p>

                  <div className="single-contact d-flex align-items-start gap-3">
                    <div className="contact-icon">
                      <i className="ri-map-pin-2-line" />
                    </div>
                    <div>
                      <h2>Clinic Location</h2>
                      <p className="font-light mb-0">
                        Near Zelebra, Karaparamb, Calicut
                      </p>
                    </div>
                  </div>

                  <div className="single-contact d-flex align-items-start gap-3">
                    <div className="contact-icon">
                      <i className="ri-mail-send-line" />
                    </div>
                    <div>
                      <h2>Email</h2>
                      <p className="font-light mb-0">
                        info@astramedicare.in
                      </p>
                    </div>
                  </div>

                  <div className="single-contact d-flex align-items-start gap-3">
                    <div className="contact-icon">
                      <i className="ri-phone-line" />
                    </div>
                    <div>
                      <h2>Phone</h2>
                      <p className="font-light mb-0">
                        +99399499339
                      </p>
                    </div>
                  </div>

                  {/* <div className="contact-page-support-list">
                    {supportPoints.map((item) => (
                      <div className="contact-page-support-item" key={item}>
                        <i className="ri-check-line" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div> */}

                  <div className="social-style-one mt-4">
                    <a href="#" aria-label="Instagram">
                      <i className="ri-instagram-line" />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <i className="ri-facebook-circle-line" />
                    </a>
                    <a href="#" aria-label="YouTube">
                      <i className="ri-youtube-line" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-page-form contact-form-area h-100">
                  <p className="contact-page-side-kicker">Send an enquiry</p>
                  <div className="section-title mb-40">
                    <h3>Book a consultation or ask <br /> us a question</h3>
                  </div>
                  <form
                    id="contactPageForm"
                    className="contactForm"
                    name="contactPageForm"
                    action="/php/form-process.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Name"
                            required
                          />
                          <label htmlFor="contact-name" className="for-icon">
                            <i className="far fa-user" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            className="form-control"
                            defaultValue=""
                            placeholder="Your Email"
                            required
                          />
                          <label htmlFor="contact-email" className="for-icon">
                            <i className="far fa-envelope" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="contact-phone"
                            name="phone"
                            className="form-control"
                            defaultValue=""
                            placeholder="Phone Number"
                            required
                          />
                          <label htmlFor="contact-phone" className="for-icon">
                            <i className="ri-phone-line" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="contact-subject"
                            name="subject"
                            className="form-control"
                            defaultValue=""
                            placeholder="Treatment Interest"
                            required
                          />
                          <label htmlFor="contact-subject" className="for-icon">
                            <i className="ri-stethoscope-line" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="contact-message"
                            className="form-control"
                            rows={5}
                            placeholder="Tell us about your concern, the treatment you are considering, or the support you need."
                            required
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            className="theme-btn w-100 btn-lg"
                            style={{ padding: 20, borderRadius: 50 }}
                          >
                            Request Consultation <i className="ri-mail-line" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-area contact-page-location">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* <div className="single-resume contact-page-location-card wow fadeInUp delay-0-2s">
                  <p className="contact-page-side-kicker">Find us easily</p>
                  <h2 className="contact-page-side-title">Visit Astra Medicare in Calicut</h2>
                  <p className="font-light">
                    Our clinic location is easy to access for consultations,
                    regular treatments, and follow-up visits. If you need help
                    finding us, our team will be happy to guide you.
                  </p>
                  <div className="contact-page-support-list compact">
                    <div className="contact-page-support-item">
                      <i className="ri-map-pin-line" />
                      <span>Near Zelebra, Karaparamb, Calicut</span>
                    </div>
                    <div className="contact-page-support-item">
                      <i className="ri-phone-line" />
                      <span>+99399499339</span>
                    </div>
                    <div className="contact-page-support-item">
                      <i className="ri-mail-line" />
                      <span>info@astramedicare.in</span>
                    </div>
                  </div>
                  <div className="d-flex gap-3 flex-wrap mt-4">
                    <a
                      href="https://maps.google.com/?q=Karaparamb,Calicut"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn"
                    >
                      Open in Maps <i className="ri-arrow-right-up-line" />
                    </a>
                    <Link href="/" className="theme-btn-outline">
                      Back to Home <i className="ri-arrow-right-up-line" />
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-12 mt-4 mt-lg-0">
                <div className="map contact-page-map">
                  <iframe
                    title="Astra Medicare Location"
                    src="https://www.google.com/maps?q=Karaparamb,Calicut&z=14&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
