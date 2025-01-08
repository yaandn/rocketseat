import americano from "../../assets/americano.svg";
import arabe from "../../assets/arabe.svg";
import cafeComLeite from "../../assets/cafe-com-Leite.svg";
import cafeGelado from "../../assets/cafe-gelado.svg";
import cappuccino from "../../assets/capuccino.svg";
import chocolateQuente from "../../assets/chocolate-quente.svg";
import cubano from "../../assets/cubano.svg";
import expressoCremoso from "../../assets/expresso-cremoso.svg";
import expresso from "../../assets/expresso.svg";
import havaiano from "../../assets/havaiano.svg";
import irlandes from "../../assets/irlandês.svg";
import latte from "../../assets/latte.svg";
import macchiato from "../../assets/macchiato.svg";
import mochaccino from "../../assets/mochaccino.svg";

interface Coffee {
  name: string;
  type: string[];
  img: string;
  description: string;
  price: number;
}

export const coffeData: Coffee[] = [
  {
    name: "Expresso Tradicional",
    type: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    img: expresso,
  },
  {
    name: "Expresso Americano",
    type: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    img: americano,
  },
  {
    name: "Expresso Cremoso",
    type: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    img: expressoCremoso,
  },
  {
    name: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    img: cafeGelado,
  },
  {
    name: "Café com Leite",
    type: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    img: cafeComLeite,
  },
  {
    name: "Latte",
    type: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    img: latte,
  },
  {
    name: "Capuccino",
    type: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    img: cappuccino,
  },
  {
    name: "Macchiato",
    type: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    img: macchiato,
  },
  {
    name: "Mocaccino",
    type: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    img: mochaccino,
  },
  {
    name: "Chocolate Quente",
    type: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    img: chocolateQuente,
  },
  {
    name: "Cubano",
    type: ["Especial", "Alcoolico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    img: cubano,
  },
  {
    name: "Cubano",
    type: ["Especial", "Alcoolico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    img: cubano,
  },
  {
    name: "Havaiano",
    type: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    img: havaiano,
  },
  {
    name: "Árabe",
    type: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    img: arabe,
  },
  {
    name: "Irlandês",
    type: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    img: irlandes,
  },
];
