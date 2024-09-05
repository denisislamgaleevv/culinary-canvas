import React from 'react';
import './Category.css';

const Category = ({ name, image, onClick }) => {
    return (
        <div className="category-card" onClick={onClick}>
            <div className="category-image-container">
                <img src={image} alt={name} className="category-image" />
            </div>
            <h2 className="category-title">{name}</h2>
        </div>
    );
};

export default Category;
