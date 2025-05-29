import { produce } from "immer";
import { ActionTypes, type Action } from "./actions";
import type { FormInputs } from "../../pages/Checkout";

export interface Item {
  id: string;
  quantity: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CartReducerState {
  items: Item[];
  order: FormInputs;
}

export function cartReducer(state: CartReducerState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const { id, quantity, description, image, price, tags, title } =
          action.payload;
        const alreadyInCart = draft.items.find(
          (item) => item.id === action.payload.id
        );

        if (alreadyInCart) {
          alreadyInCart.quantity += action.payload.quantity;
        } else {
          draft.items.push({
            id,
            description,
            quantity,
            image,
            price,
            tags,
            title,
          });
        }
      });
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, (draft) => {
        const itemIndexToRemove = draft.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndexToRemove !== -1) draft.items.splice(itemIndexToRemove, 1);
      });
    case ActionTypes.INCREMENT_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const currentItem = draft.items.find(
          (item) => item.id === action.payload.id
        );
        if (currentItem) {
          if (currentItem.quantity === 10) {
            return;
          } else {
            currentItem.quantity += 1;
          }
        }
      });
    case ActionTypes.DECREMENT_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const currentItem = draft.items.find(
          (item) => item.id === action.payload.id
        );
        if (currentItem) {
          if (currentItem.quantity === 1) {
            return;
          } else {
            currentItem.quantity -= 1;
          }
        }
      });
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        draft.order = action.payload;
      });
    default:
      return state;
  }
}
