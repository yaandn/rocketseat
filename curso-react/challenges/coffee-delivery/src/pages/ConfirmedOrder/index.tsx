import {
  ConfirmedOrderContainer,
  ConfirmedOrderContent,
  DetailsOrderContainer,
  Icon,
} from "./styles";
import confirmedOrderImage from "../../assets/confirmedOrderImage.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../context/orderContext";

export function ConfirmedOrder() {
  const { order } = useContext(OrderContext);

  const payamentOrderMap = {
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    CASH: "Dinheiro",
  };

  if (!order || !order.locationOrder || !order.payamentType) {
    return (
      <ConfirmedOrderContainer>
        <h3>Pedido não encontrado</h3>
        <span>Por favor, tente novamente mais tarde.</span>
      </ConfirmedOrderContainer>
    );
  }

  return (
    <ConfirmedOrderContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <ConfirmedOrderContent>
        <DetailsOrderContainer>
          <div>
            <Icon bgcolor="purple">
              <MapPin />
            </Icon>
            <div>
              <span>
                <strong>
                  Entrega em {order.locationOrder.road},
                  {order.locationOrder.numberLocation}
                  <br />
                </strong>
                {order.locationOrder.neighboard} - {order.locationOrder.city},{" "}
                {order.locationOrder.uf}
              </span>
            </div>
          </div>

          <div>
            <Icon bgcolor="yellow">
              <Timer weight="fill" />
            </Icon>
            <div>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>

          <div>
            <Icon bgcolor="orange">
              <CurrencyDollar />
            </Icon>
            <div>
              <span>
                Pagamento na entrega <br />
                <strong>{payamentOrderMap[order.payamentType]}</strong>
              </span>
            </div>
          </div>
        </DetailsOrderContainer>
        <img src={confirmedOrderImage} alt="Imagem de confirmação de pedido" />
      </ConfirmedOrderContent>
    </ConfirmedOrderContainer>
  );
}
