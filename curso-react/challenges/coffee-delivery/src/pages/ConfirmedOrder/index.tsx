import {
  ConfirmedOrderContainer,
  ConfirmedOrderContent,
  DetailsOrderContainer,
} from "./styles";
import confirmedOrderImage from "../../assets/confirmedOrderImage.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <ConfirmedOrderContent>
        <DetailsOrderContainer>
          <div>
            <div className="icon">
              <MapPin />
            </div>
            <div>
              <span>
                <strong>
                  Entrega em Rua João Daniel Martinelli, 102
                  <br />
                </strong>
                Farrapos - Porto Alegre, RS
              </span>
            </div>
          </div>

          <div>
            <div className="icon">
              <Timer weight="fill" />
            </div>
            <div>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>

          <div>
            <div className="icon">
              <CurrencyDollar />
            </div>
            <div>
              <span>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </div>
        </DetailsOrderContainer>
        <img src={confirmedOrderImage} />
      </ConfirmedOrderContent>
    </ConfirmedOrderContainer>
  );
}
