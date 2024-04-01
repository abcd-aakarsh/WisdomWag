import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Courses } from './assets/data.js';
import { ShopContext } from "./ShopContext.js";
const CoursePage = () => {
  const [addCart, setAddCart] = useState("Add to Cart");
  const {addToCart} = useContext(ShopContext);
  let { id } = useParams();
  id -= 1;

  return (
    <>
      <section className="course-box">
        <div className="course-page">
          <div className="course-page-grid">
            <div className="course-page-text-box">
              <h1 className="heading-primary ">{Courses[id].title}</h1>
              <p className="course-page-desc">{Courses[id].description}</p>
              <p className="course-page-desc">
                {`${Courses[id].rating} (${Courses[id].students}+ Students)`}
              </p>
              <p className="course-page-desc">
                Instructor - {Courses[id].author}
              </p>
            </div>
            <div className="course-page-img-box">
              <img src={Courses[id].image_url} className="course-page-img" />
              <button
                className="btn cart-btn"
                onClick={() => {
                  {
                    addToCart(id)
                    addCart === "Add to Cart"
                      ? setAddCart("Added to Cart")
                      : setAddCart("Add to Cart");
                  }
                }}
              >
                {addCart}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="course-box-2">
        <div className="course-page">
          <div className="course-page-grid-2 ">
            <div className="course-learn">
              <div className="course-learn-text">
                <h2 className="heading-tertiary ">What you'll learn</h2>
                <ul className="learn-list">
                  {Courses[id].what_you_will_learn.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="course-learn-text">
              <h2 className="heading-tertiary ">Skills you will gain</h2>
              <ul className="learn-list skills-list">
                {Courses[id].skills_you_will_gain.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className="course-learn-text">
              <h2 className="heading-tertiary ">Prerequisite</h2>
              <p className="mod-desc">{Courses[id].requirements}</p>
            </div>
          </div>

          <div className="course-page-module">
            <div className="course-page-module-box">
              <h2 className="heading-secondary">Modules</h2>
              <div className="course-module-grid">
                {Courses[id].modules.map((module) => (
                  <div className="mod-box course-page-title">
                    <h3 className="mod-title ">{module.title}</h3>
                    <p className="mod-desc">{module.description}</p>
                    <p className="mod-desc">
                      Duration - <strong>{module.duration}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="course-page-review">
            <div className="course-page-module-box">
              <h2 className="heading-secondary"> Featured Reviews</h2>
              <div className="course-review-grid">
                {Courses[id].reviews.map((review) => (
                  <div className="mod-box course-page-rev">
                    <h3 className="mod-title ">{review.user}</h3>
                    <p className="mod-desc">{review.rating}</p>
                    <p className="mod-desc">
                      <q>{review.comment}</q>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
