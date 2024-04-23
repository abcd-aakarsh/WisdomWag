import React from 'react';
import ayush from './assets/f-1/f-2.jpg';
import aakarsh from './assets/f-1/f-4.jpg';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Wisdom Wagon, we're passionate about empowering individuals of all
          backgrounds to unlock their coding potential. We believe that coding
          skills are essential in today's world, opening doors to exciting
          careers and fostering creative problem-solving abilities.
        </p>
        <p>
          That's why we curate high-quality, engaging coding courses that cater to
          diverse learning styles and experience levels. We strive to make
          coding accessible, fun, and rewarding for everyone.
        </p>
      </section>

      <section className="about-approach">
        <h2>Our Approach</h2>
        <div className="approach-card-container">
          <div className="approach-card">
            <h3>Interactive Learning</h3>
            <p>
              Our courses go beyond passive lectures. We use interactive exercises,
              real-world projects, and collaborative challenges to keep you engaged
              and actively applying your newfound knowledge.
            </p>
          </div>
          <div className="approach-card">
            <h3>Expert Instructors</h3>
            <p>
              You'll learn from experienced coders who are passionate about
              education. Our instructors are skilled at demystifying complex
              concepts and providing personalized guidance to help you succeed.
            </p>
          </div>
          <div className="approach-card">
            <h3>Supportive Community</h3>
            <p>
              Connect with fellow learners and instructors through our vibrant
              online community. Ask questions, share insights, and receive support
              throughout your coding journey.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-member-container">
          <TeamMember name="Ayush Mittal" role="Managing Director" person={ayush}/>
          <TeamMember name="Aakarsh Verma" role="Senior Developer" person={aakarsh}/>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Start Your Coding Journey?</h2>
        <a href="/course" className="about-cta-button">
          Browse Courses
        </a>
      </section>
    </div>
  );
};

const TeamMember = ({ name, role, person }) => {
  return (
    <div className="team-member">
      <img src={person} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default About;
