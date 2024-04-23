import React from 'react';
import './Community.css';
import facebook from "./assets/icons/icons8-facebook.svg";
import twitter from "./assets/icons/icons8-twitter.svg";
import discord from "./assets/icons/icons8-discord.svg";

const Community = () => {
  return (
    <div className="community-container">
      <h2>Join Our Thriving Coding Community</h2>
      <p>
        Connect with fellow learners and instructors at Wisdom Wagon! Our vibrant
        online community provides a supportive and stimulating environment to:
      </p>
      <ul className="community-benefits">
        <li>Ask questions and get help from experienced coders.</li>
        <li>Share your coding journey and insights with others.</li>
        <li>Engage in discussions and challenges to deepen your learning.</li>
        <li>Build lasting connections with a network of passionate coders.</li>
      </ul>
      <section className="community-channels">
        <h3>Connect with Us On:</h3>
        <div className="channel-icons">
          <a href="https://facebook.com/">
            <img src={facebook} alt="Facebook Group" />
          </a>
          <a href="https://x.com/">
            <img src={twitter} alt="Twitter Community" />
          </a>
          <a href="https://discord.com/">
            <img src={discord} alt="Discord Server" />
          </a>
        </div>
      </section>
      <section className="community-testimonials">
        <h3>Hear from Our Community Members:</h3>
        <div className="testimonial-container">
          <p className="testimonial">
            "The Wisdom Wagon community has been invaluable! I've learned so
            much from the discussions and support of other students and
            instructors." - Sarah W., Web Development Student
          </p>
          <p className="testimonial">
            "I highly recommend joining the community. It's a great way to
            stay motivated, ask questions, and connect with like-minded
            individuals." - David L., Data Science Enthusiast
          </p>
        </div>
      </section>
    </div>
  );
};

export default Community;
