import { coffeData } from "../../../../data/coffeeData";
import { Coffee } from "../Coffee";
import { CoffeeListContainer, CoffeeListContent } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>
      <CoffeeListContent>
        {coffeData.map((coffee) => {
          return (
            <Coffee
              id={coffee.id}
              key={coffee.id}
              img={coffee.img}
              description={coffee.description}
              name={coffee.name}
              price={coffee.price}
              type={coffee.type}
            />
          );
        })}
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}
