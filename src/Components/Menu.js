import React from 'react';

const Menu = () => {
    return (
        <div className="menu-container">
            <h2 className="menu-title">Sandwich Menu</h2>

            <p className="menu-subtitle">Turkey Club</p>
            <p className="menu-text">Ingredients: Turkey Breast, Bacon, Lettuce, Tomato, Mayonnaise, Triple-layered Toast.</p>
            <p className="menu-text"> Price: $5.99</p>

            <p className="menu-subtitle">Chicken Caesar Wrap</p>
            <p className="menu-text">Ingredients: Grilled Chicken, Romaine Lettuce, Caesar Dressing, Shredded Parmesan, Tortilla Wrap.</p>
            <p className="menu-text"> Price: $7.99</p>

            <p className="menu-subtitle">OVeggie Delight</p>
            <p className="menu-text"> ngredients: Avocado, Spinach, Cucumber, Red Onion, Bell Pepper, Hummus, Whole Grain Bread.</p>
            <p className="menu-text"> Price: $8.50</p>

            <p className="menu-subtitle">Tuna Salad Sandwich</p>
            <p className="menu-text"> Ingredients: Tuna, Mayonnaise, Celery, Lettuce, Tomato, Whole Grain Bread.</p>
            <p className="menu-text"> Price: $6.50</p>

            <p className="menu-subtitle">Ham & Cheese Melt</p>
            <p className="menu-text"> Ingredients: Sliced Ham, Cheddar Cheese, Mustard, Toasted Bread.</p>
            <p className="menu-text"> Price: $6.50</p>

        </div>
    );
}

export default Menu;