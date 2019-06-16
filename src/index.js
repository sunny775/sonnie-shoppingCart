import React, { useState } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import { items } from "./Data";
import { CartPage } from "./CartPage";
import "./styles.css";

const App = () => {
  const [ActiveTab, setActiveTab] = useState(0);
  const [Cart, setCart] = useState([]);

  const handleTabChange = index => {
    setActiveTab(index);
  };
  const handleAddToCart = item => {
    setCart([...Cart, item.id]);
  };
  const handleRemoveOne = item => {
    let index = Cart.indexOf(item.id);
    setCart([...Cart.slice(0, index), ...Cart.slice(index + 1)]);
  };

  const renderCart = () => {
    // I have no Idea what is going on in this function...
    let itemCounts = Cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});
    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      let item = items.find(item => item.id === parseInt(itemId, 10));
      // Create a new "item" and add the 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={handleAddToCart}
        onRemoveOne={handleRemoveOne}
      />
    );
  };

  const renderContent = () => {
    switch (ActiveTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={handleAddToCart} />;
      case 1:
        return renderCart();
    }
  };

  return (
    <div className="App">
      <Nav activeTab={ActiveTab} onTabChange={handleTabChange} />
      <main className="App-content">{renderContent()}</main>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
