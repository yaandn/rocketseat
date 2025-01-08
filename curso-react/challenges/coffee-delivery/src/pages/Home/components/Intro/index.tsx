import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Icon, IntroContainer } from "./styles";
import introImg from "../../../../assets/intro.svg";

interface HighlightType {
  icon: JSX.Element;
  description: string;
  bgColor: "orange" | "yellow" | "purple" | "gray";
}

const highlights: HighlightType[] = [
  {
    icon: <ShoppingCart size={16} weight="fill" />,
    description: "Compra simples e segura",
    bgColor: "orange",
  },

  {
    icon: <Package size={16} weight="fill" />,
    description: "Entrega rápida e rastreada",
    bgColor: "yellow",
  },
  {
    icon: <Timer size={16} weight="fill" />,
    description: "Embalagem mantém o café intacto",
    bgColor: "gray",
  },
  {
    icon: <Coffee size={16} weight="fill" />,
    description: "O café chega fresquinho até você",
    bgColor: "purple",
  },
];

export function Intro() {
  return (
    <IntroContainer>
      <div className="textContainer">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span className="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <div className="highlights">
          {highlights.map((item) => {
            return (
              <div className="highlight-item">
                <Icon bgColor={item.bgColor}>{item.icon}</Icon>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
      <img src={introImg} />
    </IntroContainer>
  );
}
