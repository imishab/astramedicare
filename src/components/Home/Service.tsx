'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Remove stains and discoloration to reveal a more radiant, confident you!',
    image: '/img/services/service-1.png'
  },
];

export default function Service() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="testimonials-area">
      <div className="">
        <div className="container-inner-service ">
          <div className="row">
            <div className="col-xl-12 col-lg-12 mt-50">
            
              <div className="section-title section-title-2  wow fadeInUp delay-0-2s">
                <h2 className="text-white">Our Services</h2>
                <p>
                  We provide personalized dental care to ensure your <br />
                  smile stays healthy and confident every day.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonials-wrap">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={-5}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  loop
                  navigation={{
                    prevEl: '.testimonial-prev',
                    nextEl: '.testimonial-next',
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 15
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 25
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 30
                    }
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {services.map((service, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-item wow fadeInUp delay-0-3s">
                        <h1 style={{ fontSize: 20 }} className="mt-4 mb-3">
                          {service.title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                              {word} {i === 0 && <br />}
                            </React.Fragment>
                          ))}
                        </h1>
                        <div className="text" style={{ fontSize: 12, lineHeight: '1.4rem' }}>
                          {service.description}
                        </div>
                        <div className="testi-des">
                          <img src={service.image} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                <button className="testimonial-prev">
                  <i className="ri-arrow-left-s-line" />
                </button>
                <button className="testimonial-next">
                  <i className="ri-arrow-right-s-line" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
