import React from "react";
import "./Menu.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"


const Menu = () => {


  return <>
    <Header />
    <main>
      <section id="menu">
        <div className="secContainer">
          <h2>Little Lemon</h2>
          <h1>Menu</h1>
          <div className="menu-links">
              <a href="#drinks" className="menu-link">Drinks</a>
              <a href="#appetizers" className="menu-link">Appetizers</a>
              <a href="#mains" className="menu-link">Mains</a>
              <a href="#dessert" className="menu-link">Dessert</a>
          </div>
          <div id="drinks" className="menu-section">
            <h3>Drinks</h3>
            <ul className="menu-list">
              <li className="menu-list_item flex"><span className="item">Bourbon Smash</span><span className="price">$12</span></li>
              <li className="menu-list_item flex"><span className="item">White Linen</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Cadillac Margarita</span><span className="price">$12</span></li>
              <li className="menu-list_item flex"><span className="item">Little Lemon Martini</span><span className="price">$15</span></li>
              <li className="menu-list_item flex"><span className="item">Strawberry Thyme Daquiri</span><span className="price">$12</span></li>
              <li className="menu-list_item flex"><span className="item">Dark n Stormy</span><span className="price">$13</span></li>
            </ul>
          </div>
          <div id="appetizers" className="menu-section">
            <h3>Appetizers</h3>
            <ul className="menu-list">
              <li className="menu-list_item flex"><span className="item">Grilled Scallops</span><span className="price">$21</span></li>
              <li className="menu-list_item flex"><span className="item">Arugala Fennel Salad</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Lamb Lollipops</span><span className="price">$27</span></li>
              <li className="menu-list_item flex"><span className="item">Soup of the Day</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Hummus and Homemade Pita</span><span className="price">$7</span></li>
              <li className="menu-list_item flex"><span className="item">Baba Ganoush</span><span className="price">$7</span></li>
            </ul>
          </div>
          <div id="mains" className="menu-section">
            <h3>Mains</h3>
            <ul className="menu-list">
              <li className="menu-list_item flex"><span className="item">Roasted Branzino with Caper Butter</span><span className="price">$MP</span></li>
              <li className="menu-list_item flex"><span className="item">Stuffed Grape Leaves</span><span className="price">$22</span></li>
              <li className="menu-list_item flex"><span className="item">Kale Artichoke Stuffed Shells</span><span className="price">$21</span></li>
              <li className="menu-list_item flex"><span className="item">Roast Half Chicken on Fattoush</span><span className="price">$27</span></li>
              <li className="menu-list_item flex"><span className="item">Lamb Shish Kebabs</span><span className="price">$32</span></li>
              <li className="menu-list_item flex"><span className="item">Seared Salmon with Tomato Reduction</span><span className="price">$29</span></li>
              <li className="menu-list_item flex"><span className="item">Spiced Pork Tenderloin with Apple Vinaigrette</span><span className="price">$32</span></li>
              <li className="menu-list_item flex"><span className="item">Pot-Roasted Eggplant in Tomato Cumin Sauce</span><span className="price">$22</span></li>
              <li className="menu-list_item flex"><span className="item">Harissa Salmon with Couscous</span><span className="price">$32</span></li>
              <li className="menu-list_item flex"><span className="item">Greek Fish Stew</span><span className="price">$MP</span></li>
            </ul>
          </div>
          <div id="dessert" className="menu-section">
            <h3>Dessert</h3>
            <ul className="menu-list">
              <li className="menu-list_item flex"><span className="item">Lemon Olive Oil Cake</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Baklava</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Chef Arthur's Chocolate Cake</span><span className="price">$14</span></li>
              <li className="menu-list_item flex"><span className="item">Scoop of Seasonal Ice Cream</span><span className="price">$8</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}

export default Menu;