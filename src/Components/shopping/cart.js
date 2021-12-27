import React from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <div>
        <div className="cart-header">
          <h1 className="cart-title ">Shopping Cart</h1>
          <div className="underline"></div>
        </div>
        <div className="empty-cart">
          <h2 className="empty-cart-heading">Your Cart is Empty...</h2>
          <Link to="/shopping">
            <button className="btn btn-primary">Lets Shop</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-4 container shop-cart-size">
      <CartProvider>
        <div className="row justify-content-center shopping-table">
          <div>
            <div className="cart-header">
              <h1 className="cart-title ">Shopping Cart</h1>
              <div className="underline"></div>
            </div>
            <div>
              <table className="table  ">
                <tbody className="cart-table">
                  {items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.img1}
                            alt="item"
                            className="cart-img"
                          />
                        </td>
                        <td className="cart-data">
                          <button className="btn cart-data-title">
                            {item.title}
                          </button>
                        </td>
                        <td className="cart-data ">
                          {" "}
                          <button className="btn cart-data-price ">
                            &#x20B9; {item.price}
                          </button>
                        </td>
                        <td className="cart-data">
                          <button className="btn  quantity-btn">
                            Quantity : {item.quantity}
                          </button>
                        </td>
                        <td className="cart-data">
                          <button
                            className="btn btn-info ms-2 cart-data-buttons"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <button
                            className="btn btn-info ms-2 cart-data-buttons"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger ms-2 cart-data-buttons"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" ms-auto">
            <h2>Total Price : &#x20B9; {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger" onClick={() => emptyCart()}>
              Empty Cart
            </button>
            <button className="btn btn-success m-3">Buy Now</button>
            <Link to="/shopping">
              <button className="btn btn-primary ">Shop More</button>
            </Link>
          </div>
        </div>
      </CartProvider>
    </section>
  );
};

export default Cart;
