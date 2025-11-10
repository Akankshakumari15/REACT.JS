import React, {useContext} from 'react';
import context from './Context';

const Add_to_cart = ({ cart }) => {
    const { state, dispatch } = useContext(context);

      // Safely handle undefined
  const cartItems = state?.cart || [];
    return (
        <div id="container">
            {cartItems.map((a, index) => (
                <div key={a.id || index} id="card">
                    <img src={a.image} alt="" />
                    <p>{a.name}</p>
                    <div>
                        <button>-</button>
                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: a.id })}>Remove</button>
                        <button>+</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Add_to_cart;
