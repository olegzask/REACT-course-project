import React from "react";
import "./category-item.styles.css";

const CategoryItem = ({ categories }) => {
  return categories.map(({ title, id, imageUrl }) => {
    return (
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Show Now</p>
        </div>
      </div>
    );
  });
};

export default CategoryItem;
