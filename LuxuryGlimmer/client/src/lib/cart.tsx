import { createContext, useContext, useReducer, ReactNode } from "react";
import type { Cart, CartItem, Product } from "@shared/schema";

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: number } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: number; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: Cart = {
  items: [],
  total: 0,
};

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    return sum + Number(item.product.price) * item.quantity;
  }, 0);
}

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.productId === product.id);

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return { items: updatedItems, total: calculateTotal(updatedItems) };
      }

      const newItem: CartItem = {
        productId: product.id,
        quantity,
        product: {
          id: product.id,
          name: product.name,
          price: product.price.toString(),
          image: product.image,
        },
      };
      const updatedItems = [...state.items, newItem];
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        item => item.productId !== action.payload.productId
      );
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

const CartContext = createContext<{
  cart: Cart;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product, quantity?: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
