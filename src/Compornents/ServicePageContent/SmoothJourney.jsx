import React, { useEffect, useRef, useState } from 'react';
import './SmoothJourney.css';
import {Link} from 'react-router-dom'


const SmoothJourney = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`smooth-journey-section ${isVisible ? 'fade-in' : ''}`}>
      <div className="content-wrapper">
        <div className="text-content">
          <h2>Enjoy a Smooth Journey</h2>
          <p>
            Enhance your Sri Lankan experience with SR Rent A Car’s premium chauffeur-driven
            airport and hotel transfers. Our fleet of luxurious vehicles, coupled with our
            professional and experienced chauffeurs, ensures a comfortable and stylish travel
            experience.
          </p>
          <p>
            From the moment you land at Colombo International Airport (CMB), our Meet and Greet
            service welcomes you with a warm and efficient reception. Our drivers will escort you to
            your chosen vehicle and assist you throughout your journey.
          </p>
          <p>
            Whether you’re heading to your hotel or embarking on a sightseeing adventure, our
            reliable and punctual transfer services provide the freedom and convenience you need.
          </p>
          <p>
            Book your airport transfer with SR Rent A Car today and experience the difference.
          </p>
          <Link to="/booking"><button className="cta-button">Book A Transfer</button></Link>
        </div>

        <div className="image-content">
          <img src="https://images.unsplash.com/photo-1658412422252-73836626e59e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJ1aWxkaW5nJTIwd2l0aCUyMGNhcnxlbnwwfDJ8MHx8fDA%3D" alt="Chauffeur service" />
          <div className="experience-box">
            <span className="years">20</span>
            <div className="text">
              <strong>Years</strong><br />
              industry<br />
              <strong>Expertise</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmoothJourney;
