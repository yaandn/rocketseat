import styled from "styled-components";

export const ConfirmOrderContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;

  width: 100%;
  gap: 3rem;

  h3 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
  }
`;

export const CompleteOrderContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  .completeOrderContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h4 {
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  gap: 0.75rem;
  width: 100%;

  header {
    display: flex;
    gap: 0.5rem;

    .icon {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  form {
    display: grid;
    gap: 1rem;

    .numberAndComplement {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 0.5rem;
    }

    .lastLine {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 2fr 2fr 1fr;
    }
  }
`;

export const Input = styled.input`
  background: ${(props) => props.theme["base-input"]};
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme["base-label"]};

  &:focus {
    border: 0;
  }
`;

export const PayamentContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;

    .icon {
      color: ${(props) => props.theme["purple"]};
    }
  }

  .containerSelectPayament {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme["base-button"]};
      padding: 1rem;
      text-transform: uppercase;
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.75rem;
      gap: 0.5rem;

      div {
        color: ${(props) => props.theme.purple};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const SelectedCoffeesCotainer = styled.div`
  width: 28rem;

  h3 {
    margin-bottom: 1rem;
  }

  .selectedCoffeeContent {
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
  }

  .selectedCoffeeItem {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1.5rem 0.25rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};

    .imgAndButtons {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      .textAndButtons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .counter {
          background: ${(props) => props.theme["base-button"]};
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          gap: 0.5rem;
          border-radius: 8px;

          button {
            color: ${(props) => props.theme["purple"]};
            cursor: pointer;
            flex: 1;
            display: flex;
            border: none;

            :focus {
              box-shadow: none;
              outline: 0;
            }

            &:hover {
              color: ${(props) => props.theme["purple-dark "]};
            }
          }

          span {
            color: ${(props) => props.theme["base-text"]};
          }
        }

        .remove {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          background-color: ${(props) => props.theme["base-button"]};
          padding: 0.5rem;
          text-transform: uppercase;
          border: 0;
          border-radius: 8px;
          color: ${(props) => props.theme["base-text"]};
          font-size: 0.75rem;
          gap: 0.5rem;
          cursor: pointer;

          div {
            color: ${(props) => props.theme.purple};
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .priceContent {
      font-weight: bold;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin-top: 2rem;
    .priceContentsList {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      .priceContentsItem {
        width: 100%;
        display: flex;
        justify-content: space-between;

        span {
          font-size: 0.875rem;
        }
      }

      .priceContentsItemTotal {
        width: 100%;
        font-weight: bold;
        display: flex;
        justify-content: space-between;

        span {
          font-size: 1.25rem;
        }
      }
    }

    button {
      padding: 0.75rem 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme["yellow"]};
      font-weight: bold;
      font-size: 0.875rem;
      border: none;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`;
