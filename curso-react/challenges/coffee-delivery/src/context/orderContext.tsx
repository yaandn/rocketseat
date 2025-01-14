import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeType } from "../data/coffeeData";

export interface ItemType {
  item: CoffeeType;
  quantity: number;
}

export interface LocationType {
  cep: number;
  road: string;
  city: string;
  numberLocation: number;
  neighboard: string;
  State: string;
  complement?: string;
}

export interface OrderType {
  cart: ItemType[];
  locationOrder: LocationType;
  payamentType: "CREDIT_CARD" | "DEBIT_CARD" | "CASH";
}

interface OrderContextProps {
  cart: ItemType[];
  addItemCart: (item: ItemType) => void;
  incrementItemCount: (id: string) => void;
  decrementItemCount: (id: string) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);

  function addItemCart(item: ItemType) {
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("@coffee-delivery: cart-v1.0", cartJSON);
  }

  function getItemsStorage() {
    const cartJSON = localStorage.getItem("@coffee-delivery: cart-v1.0");
    if (cartJSON) {
      const cartFormated = JSON.parse(cartJSON);
      setCart(cartFormated);
    }
  }

  useEffect(() => {
    getItemsStorage();
  }, []);

  function incrementItemCount(id: string) {
    const updatedCart = cart.map(({ item, quantity }) => {
      if (item.id === id) {
        return { item, quantity: quantity + 1 };
      }

      return { item, quantity };
    });

    setCart(updatedCart);
  }

  function decrementItemCount(id: string) {
    const updatedCart = cart.map(({ item, quantity }) => {
      if (item.id === id) {
        return { item, quantity: quantity - 1 };
      }

      return { item, quantity };
    });

    setCart(updatedCart);
  }

  return (
    <OrderContext.Provider
      value={{ cart, addItemCart, incrementItemCount, decrementItemCount }}
    >
      {children}
    </OrderContext.Provider>
  );
}
