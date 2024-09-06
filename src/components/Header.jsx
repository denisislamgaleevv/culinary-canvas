import React from 'react';
import './Header.css'; // Импортируем стили

const Header = () => {
    return (
        <header className="header">
            <div className="logo">РН-рецепты</div>
            <nav className="nav">
                <ul>
                    <li><a href="/home">Главная</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
