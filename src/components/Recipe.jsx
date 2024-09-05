import React from 'react';
import './Recipe.css'; // Импортируем стили
import { IoIosTimer } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
const Recipe = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </div>
            <div className="recipe-details">
                <h2 className="recipe-title">{recipe.name}</h2>
                <p className="recipe-time"><IoIosTimer/> {recipe.time} минуты</p>
                <p className="recipe-complexity"><IoBarChartSharp /> {recipe.complexity}</p>
                <h3 className='recipe-ingredients-header'>Ингредиенты:</h3>
                <ul className="recipe-ingredients">
                    {recipe.ingregients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className='recipe-ingredients-header'>Способ приготовления:</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default Recipe;
