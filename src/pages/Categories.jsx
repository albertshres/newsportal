import React from "react";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const location = useLocation();
  const currentCategory = location.pathname.substring(1) || "general";

  return (
    <div className="container my-4">
      <h3>
        Category:{" "}
        {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
      </h3>
    </div>
  );
};

export default Categories;
