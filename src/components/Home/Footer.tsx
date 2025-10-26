import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white">
    <div
      className="container py-5"
      style={{ paddingTop: 40, marginTop: "-20px" }}
    >
      <div className="row " style={{ paddingTop: 100, paddingBottom: 40 }}>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <img src="/img/logo.png" width="90%" alt="" /> <br /> <br />
          <p>
            We provide personalized dental care to ensure your smile stays healthy
            and confident every day.
          </p>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Quick Links</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <a href="#" className="text-muted">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Testimonials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Services</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <a href="#" className="text-muted">
                Facial
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Cosmatology
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Hair Treatment
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                Dental
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-muted">
                PRP
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Contact us</h6>
          <ul>
            <li>
              <p className="text-muted mb-1">
                {" "}
                <i className="ri-map-pin-line" /> <b>Address : </b> Near Zelebra,
                Karaparamb, Calicut
              </p>
              <p className="text-muted mb-1">
                {" "}
                <i className="ri-phone-line" /> <b>Phone : </b> +99399499339
              </p>
              <p className="text-muted mb-1">
                {" "}
                <i className="ri-mail-line" /> <b>Email : </b>
                info@astramedicare.in
              </p>
            </li>
          </ul>
          <ul className="list-inline mt-4">
            <li className="list-inline-item">
              <a href="#" target="_blank" title="twitter">
                <i className="fab  fa-2x fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" title="facebook">
                <i className="fab fa-2x fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" title="instagram">
                <i className="fab fa-2x fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" title="pinterest">
                <i className="fab fa-2x fa-youtube" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="_blank" title="vimeo">
                <i className="fab fa-2x fa-google" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="p-0 m-0 b-0" />
    <div className="footer-bottom pt-50 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="copyright-text">
              <p>
                Copyright @2024, <a href="index.html">Astra Medicare</a> All
                Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="copyright-text extra-copyright">
              <p>
                Crafted with ❤️{" "}
                <a href="https://www.vectorcrop.com"> VectorCrop.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
