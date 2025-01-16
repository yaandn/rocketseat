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
  quantityItemsCart: number;
  totalValueCart: number;
  addItemCart: (item: ItemType) => void;
  removeItemCart: (item: ItemType) => void;
  incrementItemCount: (id: string) => void;
  decrementItemCount: (id: string) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<ItemType[]>([]);
  const [quantityItemsCart, setQuantityItemsCart] = useState<number>(0);
  const [totalValueCart, setTotalValueCart] = useState<number>(0);

  function saveItemsStorage(updatedCart: ItemType[]) {
    const cartJSON = JSON.stringify(updatedCart);
    localStorage.setItem("@coffee-delivery: cart-v1.0", cartJSON);
  }

  function getItemsStorage() {
    const cartJSON = localStorage.getItem("@coffee-delivery: cart-v1.0");

    if (cartJSON) {
      const cartFormated = JSON.parse(cartJSON);
      setCart(cartFormated);
    }
  }

  function addItemCart(addItem: ItemType) {
    const itemExist = cart.find(({ item }) => item.id === addItem.item.id);

    if (!itemExist) {
      const cartUpdated = [...cart, addItem];
      setCart(cartUpdated);
      saveItemsStorage(cartUpdated);
      return;
    }

    const cartUpdated = cart.map(({ item, quantity }) => {
      if (item.id === addItem.item.id) {
        return { item, quantity: addItem.quantity };
      } else {
        return { item, quantity };
      }
    });

    setCart(cartUpdated);
    saveItemsStorage(cartUpdated);
  }

  function removeItemCart(removeItem: ItemType) {
    const updatedCart = cart.filter(
      (itemCart) => itemCart.item.id !== removeItem.item.id
    );
    setCart(updatedCart);
    saveItemsStorage(updatedCart);
  }

  function incrementItemCount(id: string) {
    const updatedCart = cart.map(({ item, quantity }) => {
      if (item.id === id) {
        return { item, quantity: quantity + 1 };
      }

      return { item, quantity };
    });

    setCart(updatedCart);
    saveItemsStorage(updatedCart);
  }

  function decrementItemCount(id: string) {
    const updatedCart = cart.map(({ item, quantity }) => {
      if (item.id === id) {
        return { item, quantity: quantity - 1 };
      }

      return { item, quantity };
    });

    setCart(updatedCart);
    saveItemsStorage(updatedCart);
  }

  function calcTotalValue() {
    const calculedTotalValue = cart.reduce(
      (accumulator, { item, quantity }) => {
        return accumulator + item.price * quantity;
      },
      0
    );

    setTotalValueCart(calculedTotalValue);
  }

  useEffect(() => {
    getItemsStorage();
  }, []);

  useEffect(() => {
    setQuantityItemsCart(cart.length);
    calcTotalValue();
  }, [getItemsStorage]);

  return (
    <OrderContext.Provider
      value={{
        cart,
        quantityItemsCart,
        totalValueCart,
        addItemCart,
        removeItemCart,
        incrementItemCount,
        decrementItemCount,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
