 
import React from 'react';
import './Recipe.css'; // Импортируем стили
import { IoIosTimer } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";

const getTimeString = (time) => {
    if (time % 10 === 1 && time % 100 !== 11) {
        return `${time} минута`;
    } else if (time % 10 >= 2 && time % 10 <= 4 && (time % 100 < 10 || time % 100 >= 20)) {
        return `${time} минуты`;
    } else {
        return `${time} минут`;
    }
};

const Recipe = ({ recipe }) => {
    const ingredients = recipe.ingredients || []; // Значение по умолчанию — пустой массив

    // Определяем цвет иконки в зависимости от сложности
    let iconColor;
    switch (recipe.complexity) {
        case 'Легкая':
            iconColor = '#00c925';
            break;
        case 'Средняя':
            iconColor = '#c98600';
            break;
        case 'Сложная':
            iconColor = '#c92100';
            break;
        default:
            iconColor = 'black'; // Цвет по умолчанию
    }

    return (
        <div className="recipe-card">
            <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </div>
            <div className="recipe-details">
                <h2 className="recipe-title">{recipe.name}</h2>
                <p className="recipe-time"><IoIosTimer /> {getTimeString(recipe.time)}</p>
                <p className="recipe-complexity">
                    <IoBarChartSharp style={{ color: iconColor }} /> {recipe.complexity}
                </p>
                <h3 className='recipe-ingredients-header'>Ингредиенты:</h3>
                <ul className="recipe-ingredients">
                    {ingredients.map((ingredient, index) => (
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
