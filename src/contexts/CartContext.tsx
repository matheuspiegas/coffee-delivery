import { createContext, useEffect, useReducer, type ReactNode } from "react";
import {
  addNewCoffeeInCartAction,
  checkoutOrderData,
  decrementCoffeeFromCartAction,
  incrementCoffeeFromCartAction,
  removeCoffeeFromCartAction,
} from "../reducers/cart/actions";
import { cartReducer, type Item } from "../reducers/cart/reducer";
import type { FormInputs } from "../pages/Checkout";

interface CartContext {
  cart: Item[];
  quantityOfItemsInCart: number;
  handleAddItemToCart: (item: Item) => void;
  handleRemoveCoffeeFromCart: (id: string) => void;
  handleIncrementCoffeeQuantity: (id: string) => void;
  handleDecrementCoffeeQuantity: (id: string) => void;
  handleCheckout: (data: FormInputs) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);
      return initialState;
    }
  );

  let quantityOfItemsInCart = 0;

  cartState.items.forEach((item) => {
    quantityOfItemsInCart += item.quantity;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function handleAddItemToCart(item: Item) {
    dispatch(addNewCoffeeInCartAction(item));
  }

  function handleRemoveCoffeeFromCart(id: string) {
    dispatch(removeCoffeeFromCartAction(id));
  }

  function handleIncrementCoffeeQuantity(id: string) {
    dispatch(incrementCoffeeFromCartAction(id));
  }

  function handleDecrementCoffeeQuantity(id: string) {
    dispatch(decrementCoffeeFromCartAction(id));
  }

  function handleCheckout(data: FormInputs) {
    dispatch(checkoutOrderData(data));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        handleAddItemToCart,
        handleRemoveCoffeeFromCart,
        handleIncrementCoffeeQuantity,
        handleDecrementCoffeeQuantity,
        handleCheckout,
        quantityOfItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
