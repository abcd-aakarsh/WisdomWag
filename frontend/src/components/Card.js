const Card = (Props) => {
  const Data = Props.courses;
  return (
    <>
      <div className="card-box">
        <img src={Data.image_url} className="card-img" />
        <div className="card-text">
          <h3 className="card-title">{Data.title}</h3>
          <div className="card-a-l">
            <h4 className="card-author">{Data.author}</h4>
            <h4 className="card-level ">{Data.level}</h4>
          </div>
          <h4 className="card-review card-common">
            {Data.rating}({Data.students})
          </h4>
          <h4 className="card-price card-common">Rs {Data.price_inr}</h4>
        </div>
      </div>
    </>
  );
};
export default Card;
