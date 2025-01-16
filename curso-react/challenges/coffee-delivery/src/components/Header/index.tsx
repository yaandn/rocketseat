import { HeaderContainer, Location, Cart } from "./styles";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../context/orderContext";

export function Header() {
  const { quantityItemsCart } = useContext(OrderContext);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <NavLink to="/confirmOrder">
            <div className="qtdd_items">{quantityItemsCart}</div>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Cart>
      </div>
    </HeaderContainer>
  );
}
