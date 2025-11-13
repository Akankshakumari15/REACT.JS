import { createContext, useEffect, useReducer } from "react";

const context = createContext();
export default context;

const ContextP = ({ children }) => {
  const initialState = {
    apiData: [],
    cart: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, apiData: action.payload };
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_DATA", payload: data.recipes }))
      .catch(err => console.log(err));
  }, []);

  return (
    <context.Provider value={{ state, dispatch }}>
      {children}
    </context.Provider>
  );
};

export { ContextP };
