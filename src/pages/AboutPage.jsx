import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            Discover who we are, what we do, and why we are passionate about
            delivering the best products to you.
          </p>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bring you the highest quality products with
          exceptional service. We aim to improve your lifestyle by offering the
          latest trends and technologies.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://i.ibb.co/mRBhTD1/swarup.jpg"
              alt="Team Member 1"
            />
            <h3>Swarup</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img
              src="https://i.ibb.co/JnsVPxr/biswal.jpg"
              alt="Team Member 2"
            />
            <h3>Subham</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <img
              src="https://i.ibb.co/T1kRVYv/swatik.jpg"
              alt="Team Member 3"
            />
            <h3>Swatik</h3>
            <p>Head Designer</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="about-why-choose-us">
  <h2>Why Choose Us?</h2>
  <div className="choose-us-container">
    <div className="choose-card">
      <div className="icon">
        <i className="fas fa-gem"></i>
      </div>
      <h3>High-Quality Products</h3>
      <p>We offer only the best quality products that meet your needs and expectations.</p>
    </div>
    <div className="choose-card">
      <div className="icon">
        <i className="fas fa-headset"></i>
      </div>
      <h3>Exceptional Service</h3>
      <p>Our customer service team is available 24/7 to assist you with any queries.</p>
    </div>
    <div className="choose-card">
      <div className="icon">
        <i className="fas fa-shield-alt"></i>
      </div>
      <h3>100% Satisfaction</h3>
      <p>Your satisfaction is our top priority. We ensure you get value for your money.</p>
    </div>
    <div className="choose-card">
      <div className="icon">
        <i className="fas fa-truck"></i>
      </div>
      <h3>Fast Delivery</h3>
      <p>Enjoy quick and reliable delivery services, no matter where you are.</p>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutPage;
