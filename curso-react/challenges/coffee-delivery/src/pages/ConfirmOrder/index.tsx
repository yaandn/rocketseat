import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  CompleteOrderContainer,
  ConfirmOrderContainer,
  FormContainer,
  Input,
  PayamentContainer,
  SelectedCoffeesCotainer,
} from "./styles";

import { useContext } from "react";
import { ItemType, OrderContext } from "../../context/orderContext";

export function ConfirmOrder() {
  const {
    cart,
    totalValueCart,
    decrementItemCount,
    incrementItemCount,
    removeItemCart,
  } = useContext(OrderContext);

  function handleincrementItemCount(id: string) {
    incrementItemCount(id);
  }

  function handledecrementItemCount(id: string) {
    decrementItemCount(id);
  }

  function handleRemoveItemCart(itemCart: ItemType) {
    removeItemCart(itemCart);
  }

  return (
    <ConfirmOrderContainer>
      <CompleteOrderContainer>
        <h3>Complete seu pedido</h3>
        <div className="completeOrderContent">
          <FormContainer>
            <header>
              <div className="icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Endereço de Entega</h4>
                <span>Informe o endereço onde deeja receber seu pedido</span>
              </div>
            </header>
            <form>
              <div>
                <Input placeholder="CEP" />
              </div>

              <Input placeholder="Rua" />

              <div className="numberAndComplement">
                <Input placeholder="Número" />
                <Input placeholder="Complemento" />
              </div>

              <div className="lastLine">
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" />
              </div>
            </form>
          </FormContainer>
          <PayamentContainer>
            <header>
              <div className="icon">
                <CurrencyDollar size={22} />
              </div>
              <div>
                <h4>Pagamento</h4>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>
            <div className="containerSelectPayament">
              <button>
                <div>
                  <CreditCard size={16} />
                </div>
                Cartão de crédito
              </button>
              <button>
                <div>
                  <Money size={16} />
                </div>
                Cartão de crédito
              </button>
              <button>
                <div>
                  <Bank size={16} />
                </div>
                Cartão de crédito
              </button>
            </div>
          </PayamentContainer>
        </div>
      </CompleteOrderContainer>
      <SelectedCoffeesCotainer>
        <h3>Cafés selecionados</h3>
        <div className="selectedCoffeeContent">
          <div className="selectedListCoffee">
            {cart.map(({ item, quantity }) => {
              return (
                <div className="selectedCoffeeItem" key={item.id}>
                  <div className="imgAndButtons">
                    <img src={item.img} />
                    <div className="textAndButtons">
                      <span>{item.name}</span>
                      <div className="buttons">
                        <div className="counter">
                          <button
                            onClick={() => handledecrementItemCount(item.id)}
                            disabled={quantity <= 1}
                          >
                            <Minus weight="bold" />
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={() => handleincrementItemCount(item.id)}
                          >
                            <Plus weight="bold" />
                          </button>
                        </div>
                        <button
                          className="remove"
                          onClick={() =>
                            handleRemoveItemCart({ item, quantity })
                          }
                        >
                          <div>
                            <Trash size={16} />
                          </div>
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="priceContent">
                    <span>
                      R${" "}
                      {item.price.toString().padEnd(4, "0").replace(".", ",")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <footer>
            <div className="priceContentsList">
              <div className="priceContentsItem">
                <span>Total de itens</span>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalValueCart)}
                </p>
              </div>
              <div className="priceContentsItem">
                <span>Entrega</span>
                <p>R$ 3,50</p>
              </div>
              <div className="priceContentsItemTotal">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalValueCart + 3.5)}
                </span>
              </div>
            </div>
            <button>Confirmar Pedido</button>
          </footer>
        </div>
      </SelectedCoffeesCotainer>
    </ConfirmOrderContainer>
  );
}
