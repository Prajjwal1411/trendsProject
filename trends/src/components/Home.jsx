// Created by Anetia Faber(8917618)


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import program1 from "../media/bg-screen-2_bx7kc2.jpeg";
import program2 from "../media/bg-screen-3_ix3ebv.jpeg";
import program3 from "../media/bg-screen-4_zhgywg.jpeg";
import videoSrc from "../media/View_thtz9k.webm";
import whyChooseUsImage from "../media/impact-3_usvwmo.jpeg";
import companyLogo1 from "../media/Frame_3037_1_ozoi82.png";
import companyLogo2 from "../media/Frame_3037_2_vra5on.png";
import companyLogo3 from "../media/Frame_3037_3_dk9ooo.png";
import companyLogo4 from "../media/Frame_3037_h0mhxx.png";

const Home = () => {
  const images = [program1, program2, program3];
  const programs = [
    {
      image: program1,
      title: "Wall Pilates",
      description: "Sculpt your body in 28 days",
      link: "https://betterme-wallpilates.com/first-page-generated?flow=1416&utm_source=corp_site&utm_medium=betterme_world&utm_campaign=get_started_slider_btn_on_home_page",
    },
    {
      image: program2,
      title: "Calisthenics Workout",
      description: "Build muscle using your body weight in 4 weeks",
      link: "https://betterme-calisthenics.com/en/first-page-generated?flow=1500&utm_source=corp_site&utm_medium=betterme_world&utm_campaign=get_started_slider_btn_on_home_page",
    },
    {
      image: program3,
      title: "Intermittent Fasting",
      description: "Simplify your daily nutrition schedule",
      link: "https://betterme-fasting.com/en/first-page-generated?flow=1443&utm_source=corp_site&utm_medium=betterme_world&utm_campaign=get_started_slider_btn_on_home_page",
    },
  ];

  const testimonials = [
    {
      logo: companyLogo1,
      review:
        "CEO Victoria Repa Is Leading the Way to a Healthier Tomorrow. Here’s How.",
      company: "Nasdaq",
      link: "https://www.nasdaq.com/articles/ceo-victoria-repa-is-leading-the-way-to-a-healthier-tomorrow-heres-how",
    },
    {
      logo: companyLogo2,
      review:
        "30 Best Matching Workout Sets That Make Breakin' a Sweat Look Fabulous",
      company: "Cosmopolitan",
      link: "https://www.cosmopolitan.com/style-beauty/fashion/g41886522/best-matching-workout-sets/",
    },
    {
      logo: companyLogo3,
      review:
        "What I learnt from using the BetterMe fitness app that strengthens your brain and body",
      company: "Hello!",
      link: "https://www.hellomagazine.com/healthandbeauty/health-and-fitness/506854/betterme-review-fitness-app/",
    },
    {
      logo: companyLogo4,
      review:
        "NEW YEAR, NEW YOU BetterMe review: This health coaching app is packed with useful tips",
      company: "The SUN",
      link: "https://www.thesun.co.uk/shopping/product-reviews/24990696/betterme-review/",
    },
  ];

  return (
    <div>
      {/* Video Banner */}
      <div className="video-banner">
        <video className="video-banner__video" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-banner__content">
          <h1>
            Fun and Simple Fitness: <br /> personalized activities to <br />{" "}
            cover your wellness needs
          </h1>
          <a
            href="https://betterme-pilates.com/first-page-generated?flow=2117&utm_source=corp_site&utm_medium=betterme_world&utm_campaign=get_started_slider_btn_on_home_page"
            className="btn-get-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid-container">
        <div className="grid-item">
          <h2 className="large-text">3000+</h2>
          <p className="small-text">Workouts</p>
        </div>
        <div className="grid-item">
          <h2 className="large-text">24/7</h2>
          <p className="small-text">Access to Mental Coaches</p>
        </div>
        <div className="grid-item">
          <h2 className="large-text">1000+</h2>
          <p className="small-text">Products</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="why-choose-us__content">
          {/* Grid for List Items */}
          <div className="why-choose-us__list">
            <div className="why-choose-us__item">
              <h3>
                <span className="tick">✔</span>Fitness & Nutrition
              </h3>
              <p>
              Achieve your goals with customized workouts and meal plans designed for your unique needs.
              </p>
            </div>
            <div className="why-choose-us__item">
              <h3>
                <span className="tick">✔</span>Balanced Mindset
              </h3>
              <p>
              Empower with mindfulness practices to enhance mental well-being and productivity.
              </p>
            </div>
            <div className="why-choose-us__item">
              <h3>
                <span className="tick">✔</span>Employee Wellbeing
              </h3>
              <p>
              Empower a resilient, high-performing workforce with BetterMe’s health transformation platform.
              </p>
            </div>
            <div className="why-choose-us__item">
              <h3>
                <span className="tick">✔</span>Personalized Plans
              </h3>
              <p>
                Get personalized fitness and wellness plans tailored to your
                needs.
              </p>
            </div>
          </div>
          <div className="why-choose-us__image">
            <img src={whyChooseUsImage} alt="Why Choose Us" />
          </div>
        </div>
      </div>

      {/* Featured Programs Section */}
      <div className="featured-programs">
        <h2>Our Featured Programs</h2>
        <div className="featured-programs__grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-card__image-container">
                <img src={program.image} alt={program.title} />
                <a
                  href={program.link}
                  className="get-started-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Are Saying</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card"
            >
              <img
                src={testimonial.logo}
                alt={`Logo of ${testimonial.company}`}
                className="testimonial-card__logo"
              />
              <p className="testimonial-card__review">"{testimonial.review}"</p>
              <p className="testimonial-card__company">
                - {testimonial.company}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
