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
  ButtonSelect,
  CompleteOrderContainer,
  ConfirmOrderContainer,
  FormContainer,
  Input,
  PayamentContainer,
  SelectedCoffeesCotainer,
} from "./styles";

import { useContext } from "react";
import {
  ItemType,
  OrderContext,
  PayamentType,
} from "../../context/orderContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export function ConfirmOrder() {
  const {
    cart,
    totalValueCart,
    payamentForm,
    decrementItemCount,
    incrementItemCount,
    removeItemCart,
    registerLocation,
    registerPayamentform,
    registerOrder,
  } = useContext(OrderContext);

  const navigate = useNavigate();

  function handleincrementItemCount(id: string) {
    incrementItemCount(id);
  }

  function handledecrementItemCount(id: string) {
    decrementItemCount(id);
  }

  function handleRemoveItemCart(itemCart: ItemType) {
    removeItemCart(itemCart);
  }

  const locationSchema = z.object({
    cep: z.string().length(8).nonempty(),
    road: z.string().nonempty(),
    numberLocation: z.string().nonempty(),
    complement: z.string().optional(),
    neighboard: z.string().nonempty(),
    city: z.string().nonempty(),
    uf: z.string().nonempty(),
  });

  type LocationType = z.infer<typeof locationSchema>;

  const { handleSubmit, reset, register } = useForm<LocationType>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      cep: "",
      city: "",
      complement: "",
      neighboard: "",
      numberLocation: "",
      road: "",
      uf: "",
    },
  });

  function handleSubmitButton(data: LocationType) {
    registerLocation(data);
    registerOrder(data);
    navigate("/confirmedOrder");
    reset();
  }

  function setPaymentForm(form: PayamentType) {
    registerPayamentform(form);
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
                <Input placeholder="CEP" {...register("cep")} />
              </div>

              <Input placeholder="Rua" {...register("road")} />

              <div className="numberAndComplement">
                <Input placeholder="Número" {...register("numberLocation")} />
                <Input placeholder="Complemento" {...register("complement")} />
              </div>

              <div className="lastLine">
                <Input placeholder="Bairro" {...register("neighboard")} />
                <Input placeholder="Cidade" {...register("city")} />
                <Input placeholder="UF" {...register("uf")} />
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
              <ButtonSelect
                onClick={() => setPaymentForm("CREDIT_CARD")}
                isActive={payamentForm === "CREDIT_CARD"}
              >
                <div>
                  <CreditCard size={16} />
                </div>
                Cartão de crédito
              </ButtonSelect>
              <ButtonSelect
                onClick={() => setPaymentForm("DEBIT_CARD")}
                isActive={payamentForm === "DEBIT_CARD"}
              >
                <div>
                  <Money size={16} />
                </div>
                Cartão de Débito
              </ButtonSelect>
              <ButtonSelect
                onClick={() => setPaymentForm("CASH")}
                isActive={payamentForm === "CASH"}
              >
                <div>
                  <Bank size={16} />
                </div>
                Dinheiro
              </ButtonSelect>
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

            <button onClick={handleSubmit(handleSubmitButton)}>
              Confirmar Pedido
            </button>
          </footer>
        </div>
      </SelectedCoffeesCotainer>
    </ConfirmOrderContainer>
  );
}
