import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState([]);
  const fetchdata = () => {
    //   fetch(
    //     cat
    //       ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c043e24d9a074fef80574fae2d5d1337`
    //       : `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c043e24d9a074fef80574fae2d5d1337`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => setData(data.articles));

    const url = cat
      ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c043e24d9a074fef80574fae2d5d1337`
      : `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c043e24d9a074fef80574fae2d5d1337`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <Link to={items.url} className="text-decoration-none">
                    <div className="card h-100" style={{ width: "18rem" }}>
                      {/* <img src={items.urlToImage} class="card-img-top" alt="" /> */}
                      <img
                        src={
                          items.urlToImage || "https://via.placeholder.com/150"
                        }
                        className="card-img-top"
                        alt={items.title || "Image not available"}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title" key={index}>
                          {items.title}
                        </h5>
                        <p key={index} class="card-text">
                          {items.description}
                        </p>
                        {/* <Link to={items.url} className="btn btn-primary">
                        Read More
                      </Link> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            ))
          : "loading"}
      </div>
    </div>
  );
};

export default FetchData;
