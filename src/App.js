import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Category from './components/Category';
import Recipe from './components/Recipe';
import { IoArrowBackSharp } from "react-icons/io5";
import Contacts from './components/Contacts';
import './App.css';
import Header from './components/Header';

const categories = [
  { name: 'Салаты', image: 'https://png.klev.club/uploads/posts/2024-04/png-klev-club-q654-p-salat-png-5.png' },
  { name: 'Супы', image: 'https://lh3.googleusercontent.com/proxy/E5n4LrmNsKZOT6_1WYVKblXuF1uXIAUaE_noFjfRz5JSGOtzrWY4ORxj1_1wYSMY96-X1OSMg-uQUSEfQzYXkEmmHL0Fl0etWWz_EL4Pqgs' },
  { name: 'Закуски', image: 'https://i.siteapi.org/_KQvb4RkMmneP3dCodFI_iYtg0g=/fit-in/544x408/filters:fill(transparent):format(png)/18a28926fab94db.s2.siteapi.org/page/j3sxpkhbc000oo4oo0s40scwc0skwo' },
  { name: 'Десерты', image: 'https://brand-ice.ru/upload/iblock/362/36238f1955ea982a52c61a040cc06056.png' },
];

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://63708fe208218c267e017d80.mockapi.io/register');
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Ошибка при загрузке рецептов:', error);
            }
        };

        fetchRecipes();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory(null);
    };

    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/home" element={
                        selectedCategory ? (
                            <div>
                                <IoArrowBackSharp onClick={handleBack} className="back-button" />
                                <h1 className='selected-category'>{selectedCategory}</h1>
                                <div className="recipes-container">
                                    {recipes
                                        .filter(recipe => recipe.category === selectedCategory)
                                        .map(recipe => (
                                            <Recipe key={recipe.id} recipe={recipe} />
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <div className="categories-container">
                                {categories.map((category, index) => (
                                    <Category 
                                        key={index} 
                                        name={category.name} 
                                        image={category.image} 
                                        onClick={() => handleCategoryClick(category.name)} 
                                    />
                                ))}
                            </div>
                        )
                    } />
                    <Route path="/contact" element={
                        <Contacts/>
                    } />
                </Routes>
                
            </div>
        </Router>
    );
};

export default App;
