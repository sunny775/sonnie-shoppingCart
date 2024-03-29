import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";
export function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul className="CartPage-items">
      {items.map(item => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => {
                  onRemoveOne(item);
                }}
              >
                &ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                onClick={() => {
                  onAddOne(item);
                }}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
      {items.length === 0 ? (
        <h4>your cart is empty</h4>
      ) : (
        <li className="CartPage-item CartPage-total">
          Total: $
          {items.reduce((sum, item) => sum + item.price * item.count, 0)}
        </li>
      )}
    </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};
