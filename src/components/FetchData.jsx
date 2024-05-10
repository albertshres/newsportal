import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState([]);
  const fetchdata = () => {
    fetch(
      cat
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c043e24d9a074fef80574fae2d5d1337`
        : `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c043e24d9a074fef80574fae2d5d1337`
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  };
  useEffect(() => {
    fetchdata();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3>
        <u>Top Headings</u>
      </h3>
      <div className="row justify-content-center">
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="col-lg-5 mb-4" key={index}>
                  <div className="card w-100" style={{ width: "60vw" }}>
                    <img src={items.urlToImage} class="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title" key={index}>
                        {items.title}
                      </h5>
                      <p key={index} class="card-text">
                        {items.description}
                      </p>
                      <Link to={items.url} className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))
          : "loading"}
      </div>
    </div>
  );
};

export default FetchData;
