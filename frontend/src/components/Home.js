import heroimg from "./assets/hero.png";
import img1 from "./assets/card/1.png";
import img2 from "./assets/card/2.png";
import img3 from "./assets/card/3.png";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>
              Coding dreams begin at{" "}
              <span className="hero-ww">WisdomWagon</span>
            </h1>
            <p>
              Take your overnight coding into the world of endless possiblities.
            </p>
            <button
              href="https://roadmap.sh/"
              target="_blank"
              className="btn-outline"
            >
              Explore roadmaps{" "}
            </button>
          </div>
          <div className="hero-img">
            <img src={heroimg} alt="hero" className="hero-image" />
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="box b-bottom">
          <div className="intro-head">
            <div className="intro-text">
              <h2 className="heading-secondary">
                Learn with WisdomWag. A detailed look at Our Curriculum
              </h2>
            </div>
            <div className="intro-side">
              <p className="intro-des">
                With real world projects to create and online classNamees that
                fits a busy routine
              </p>

              <button href="#" className="btn-outline">
                Start Learning
              </button>
            </div>
          </div>

          <div className="intro-main">
            <div className="intro-left intro-text-box">
              <h3 className="heading-tertiary">
                Learn at your own pace with hands-on creative classNamees.
              </h3>

              <p className="intro-box-des">
                Looking to expand your coding skills and explore your interests?
                Our hands-on creative courses are the perfect way to learn at
                your own pace.
              </p>
            </div>
            <div className="intro-right intro-text-box">
              <h3 className="heading-tertiary">
                WisdomWag. teachers are everyday creatives and professionals who
                want to share their passion
              </h3>
              <p className="intro-box-des">
                At WisdomWag. we believe that everyone have something to teach
                and share with the world.Our teachers are not just experts in
                their field,they are also passionate about teaching and helping
                other discover their own talents.They take time to know their
                students and tailor their instruction to meet their individual
                needs and goals.
              </p>
            </div>
          </div>
          <div className="features grid grid--2--col">
            <h3 className="heading-tertiary">Our Features Special for you</h3>

            <div className="features-ulist">
              <ul className="features-list">
                <li className="l-element">Get Certificate</li>
                <li className="l-element">Amazing Instructors</li>
                <li className="l-element">Lifetime Support</li>
                <li className="l-element">Video Lesson</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="popular-courses">
        <div class="box">
          <h2 class="heading-secondary course-heading">Popular Courses</h2>
          <div class="c-search">
            <input
              type="text"
              id="find"
              placeholder="Course name"
              class="c-search-box"
            />
            <button type="button" class="c-button">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div class="course-container grid grid--3--col">
            <div class="course-card ">
              <div class="card-img">
                <img src={img1} alt="#" class="card-i" />
                <div class="card-h">
                  <h4 class="tag-w">Web Development</h4>
                  <h4 class="other-heading">HTML and CSS</h4>
                </div>
              </div>
              <div class="card-text">
                <p class="card-des">
                  Learn <strong>HTML5</strong> , <strong>CSS3</strong> and web
                  design by building a stunning website for your portfolio!.
                  Includes flexbox and <strong>CSS</strong> grid.
                </p>
                <div class="i-r">
                  <div class="instructor-tag">
                    <ion-icon name="person" class="ins-icon-i"></ion-icon>
                    <span>G Srivastava</span>
                  </div>
                  <div class="rating-tag">
                    <span>4.7</span>
                  </div>
                </div>
                <div class="pricings">
                  <span class="course-price">&#x20a8;499/-</span>
                  <a href="#" class="btn-outline">
                    Join &#8674;
                  </a>
                </div>
              </div>
            </div>
            <div class="course-card c-2">
              <div class="card-img">
                <img src={img2} alt="#" class="card-i" />
                <div class="card-h">
                  <h4 class="tag-p">Programming</h4>
                  <h4 class="other-heading">Data Structure</h4>
                </div>
              </div>
              <div class="card-text">
                <p class="card-des">
                  Learn , Analyse and Implement <strong>Data Structure</strong>{" "}
                  using C and C++.Learn Recursion and Sorting.
                  <strong>100+</strong> DSA interview questions for cracking
                  FAANGs.
                </p>
                <div class="i-r">
                  <div class="instructor-tag">
                    <ion-icon name="person" class="ins-icon-i"></ion-icon>
                    <span>M Uchiha</span>
                  </div>
                  <div class="rating-tag">
                    <span>4.8</span>
                  </div>
                </div>
                <div class="pricings">
                  <span class="course-price">&#x20a8;749/-</span>
                  <a href="#" class="btn-outline">
                    Join &#8674;
                  </a>
                </div>
              </div>
            </div>
            <div class="course-card">
              <div class="card-img">
                <img src={img3} alt="#" class="card-i" />
                <div class="card-h">
                  <h4 class="tag-w">Web Development</h4>

                  <h4 class="other-heading">React Js</h4>
                </div>
              </div>
              <div class="card-text">
                <p class="card-des">
                  Dive in and learn <strong>React.js</strong> from scratch!
                  Learn React, Hooks, Redux, React Router, Next.js, Best
                  Practices and way more!
                </p>
                <div class="i-r">
                  <div class="instructor-tag">
                    <span>K Hatake</span>
                  </div>
                  <div class="rating-tag">
                    <span>4.9</span>
                  </div>
                </div>
                <div class="pricings">
                  <span class="course-price">&#x20a8;649/-</span>
                  <button class="btn-outline">Join &#8674;</button>
                </div>
              </div>
            </div>
            <div class="course-card hidden">
              <div class="card-img">
                <img src="./assets/card/4.png" alt="#" class="card-i" />
                <div class="card-h">
                  <h4 class="tag-p">Programming</h4>
                  <h4 class="other-heading">DBMS</h4>
                </div>
              </div>
              <div class="card-text">
                <p class="card-des">
                  Learn <strong>Database Management Systems</strong> from
                  scratch as Database Management System forms the core of
                  computer science
                </p>
                <div class="i-r">
                  <div class="instructor-tag">
                    <span>K Ichigo</span>
                  </div>
                  <div class="rating-tag">
                    <span>4.4</span>
                  </div>
                </div>
                <div class="pricings">
                  <span class="course-price">&#x20a8;399/-</span>
                  <a href="#" class="btn-outline">
                    Join &#8674;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="course-btn">
            <a href="./courses.html" class="btn ">
              View all Courses&#8674;
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
