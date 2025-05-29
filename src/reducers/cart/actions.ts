import type { Item } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CART = "ADD_NEW_COFFEE_TO_CART",
  REMOVE_COFFEE_FROM_CART = "REMOVE_COFFEE_FROM_CART",
  INCREMENT_COFFEE_QUANTITY = "INCREMENT_COFFEE_QUANTITY",
  DECREMENT_COFFEE_QUANTITY = "DECREMENT_COFFEE_QUANTITY",
}

export type Action =
  | { type: ActionTypes.REMOVE_COFFEE_FROM_CART; payload: { id: string } }
  | {
      type: ActionTypes.ADD_NEW_COFFEE_TO_CART;
      payload: Item;
    }
  | { type: ActionTypes.INCREMENT_COFFEE_QUANTITY; payload: { id: string } }
  | { type: ActionTypes.DECREMENT_COFFEE_QUANTITY; payload: { id: string } };

export function addNewCoffeeInCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_TO_CART,
    payload: item,
  } as const;
}

export function removeCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: { id },
  } as const;
}
export function decrementCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: { id },
  } as const;
}
export function incrementCoffeeFromCartAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: { id },
  } as const;
}
