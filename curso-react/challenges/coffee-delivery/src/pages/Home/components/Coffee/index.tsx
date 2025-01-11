import { NavLink } from "react-router-dom";
import {
  AddAndRemoveCartArea,
  ButtonOpenCart,
  CartArea,
  CoffeeContainer,
  Footer,
  TypeContainer,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

interface CoffeeProps {
  name: string;
  type: string[];
  img: string;
  description: string;
  price: number;
}

export function Coffee({ name, type, description, img, price }: CoffeeProps) {
  return (
    <CoffeeContainer>
      <img src={img} />
      <TypeContainer>
        {type.map((item) => {
          return (
            <div>
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
            <div>
              <Minus weight="bold" />
            </div>
            <span>1</span>
            <div>
              <Plus weight="bold" />
            </div>
          </AddAndRemoveCartArea>
          <ButtonOpenCart>
            <NavLink to="confirmOrder">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </ButtonOpenCart>
        </CartArea>
      </Footer>
    </CoffeeContainer>
  );
}
