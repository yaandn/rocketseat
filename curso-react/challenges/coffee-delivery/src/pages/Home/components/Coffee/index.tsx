import {
  AddAndRemoveCartArea,
  ButtonAddCart,
  CartArea,
  CoffeeContainer,
  Footer,
  TypeContainer,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ItemType, OrderContext } from "../../../../context/orderContext";

interface CoffeeProps {
  id: string;
  name: string;
  type: string[];
  img: string;
  description: string;
  price: number;
}

export function Coffee({
  id,
  name,
  type,
  description,
  img,
  price,
}: CoffeeProps) {
  const [quantityItem, setQuantityItem] = useState(0);
  const { addItemCart } = useContext(OrderContext);

  function handleAddCountCoffee() {
    setQuantityItem((state) => state + 1);
  }

  function handleDecrementCountCoffee() {
    setQuantityItem((state) => state - 1);
  }

  function handleAddItemCart() {
    const newItem: ItemType = {
      item: { id, description, img, name, price, type },
      quantity: quantityItem,
    };

    addItemCart(newItem);
  }

  return (
    <CoffeeContainer>
      <img src={img} />
      <TypeContainer>
        {type.map((item) => {
          return (
            <div key={item}>
              <span>{item.toUpperCase()}</span>
            </div>
          );
        })}
      </TypeContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <Footer>
        <div className="priceArea">
          <span>R$</span>
          <h4>{String(price).replace(".", ",").padEnd(4, "0")}</h4>
        </div>
        <CartArea>
          <AddAndRemoveCartArea>
            <button
              onClick={handleDecrementCountCoffee}
              disabled={quantityItem <= 0}
            >
              <Minus weight="bold" />
            </button>
            <span>{quantityItem}</span>
            <button onClick={handleAddCountCoffee}>
              <Plus weight="bold" />
            </button>
          </AddAndRemoveCartArea>
          <ButtonAddCart
            onClick={handleAddItemCart}
            disabled={quantityItem <= 0}
          >
            <div>
              <ShoppingCart size={22} weight="fill" />
            </div>
          </ButtonAddCart>
        </CartArea>
      </Footer>
    </CoffeeContainer>
  );
}
