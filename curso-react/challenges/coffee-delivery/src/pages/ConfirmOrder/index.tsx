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

import arabe from "../../assets/arabe.svg";

export function ConfirmOrder() {
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
            <div className="selectedCoffeeItem">
              <div className="imgAndButtons">
                <img src={arabe} />
                <div className="textAndButtons">
                  <span>Expresso Tradicional</span>
                  <div className="buttons">
                    <div className="counter">
                      <div>
                        <Minus weight="bold" />
                      </div>
                      <span>1</span>
                      <div>
                        <Plus weight="bold" />
                      </div>
                    </div>
                    <button className="remove">
                      <div>
                        <Trash size={16} />
                      </div>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <div className="priceContent">
                <span>R$ 9,90</span>
              </div>
            </div>
            <div className="selectedCoffeeItem">
              <div className="imgAndButtons">
                <img src={arabe} />
                <div className="textAndButtons">
                  <span>Expresso Tradicional</span>
                  <div className="buttons">
                    <div className="counter">
                      <div>
                        <Minus weight="bold" />
                      </div>
                      <span>1</span>
                      <div>
                        <Plus weight="bold" />
                      </div>
                    </div>
                    <button className="remove">
                      <div>
                        <Trash size={16} />
                      </div>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <div className="priceContent">
                <span>R$ 9,90</span>
              </div>
            </div>
          </div>

          <footer>
            <div className="priceContentsList">
              <div className="priceContentsItem">
                <span>Total de itens</span>
                <p>R$ 29,70</p>
              </div>
              <div className="priceContentsItem">
                <span>Entrega</span>
                <p>R$ 3,50</p>
              </div>
              <div className="priceContentsItemTotal">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button>Confirmar Pedido</button>
          </footer>
        </div>
      </SelectedCoffeesCotainer>
    </ConfirmOrderContainer>
  );
}
