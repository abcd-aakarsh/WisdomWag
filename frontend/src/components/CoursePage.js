import { useContext, useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Courses } from './assets/data.js';
import { CartContext } from "./ShopContext.js";
const CoursePage = () => {
  const [addCart, setAddCart] = useState("Add to Cart");
  const { addToCart } = useContext(CartContext);
  let { id } = useParams();
  id -= 1;
  const amount = Courses[id].price_inr*100;
  const currency = "INR";
  const receiptId = "a1b2c3";

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth-token');
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  const orderHandler = (e)=>{
    console.log("yes");
    if (!authenticated) {
      console.log("no");
      return <Navigate to="/login"/>;
    } else {
      console.log("yes");
      paymentHandler(e);
    }
  };
  
  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:3000/order",{
      method:"POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    let options = {
      "key": "rzp_test_daYrLgN3l5bAHt",
      amount,
      currency,
      "name": "Wisdom Wagon",
      "description": "Test Transaction",
      "image": "/frontend/src/components/assets/logo.jpg",
      "order_id": order.id,
      "handler": function (response){
        window.location.replace("/playcourse");
      },
      "prefill": { 
          "name": "Gaurav Kumar", 
          "email": "gaurav.kumar@example.com", 
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });

    rzp1.open();
    e.preventDefault();
  };

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
                      ? setAddCart("Added")
                      : setAddCart("Add to Cart");
                  }
                }}
              >
                {addCart}
              </button>
              <button className="btn cart-btn" onClick={orderHandler}>Buy Now</button>
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
