import styled from "styled-components";

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  padding: 0.5rem;

  img {
    width: 7.5rem;
    margin-top: -4rem;
  }

  h3 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
  }

  P {
    font-size: 0.875rem;
    text-align: center;
    line-height: 130%;
    display: block;
    margin-top: 0.5rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const TypeContainer = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  div {
    background: ${(props) => props.theme["yellow-light"]};
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 130%;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const Footer = styled.footer`
  width: 90%;

  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;

  .priceArea {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    span {
      font-size: 0.875rem;
    }

    h4 {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }
`;

export const CartArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AddAndRemoveCartArea = styled.div`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;

  div {
    color: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
    flex: 1;
    display: flex;

    &:hover {
      color: ${(props) => props.theme["purple"]};
    }
  }

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ButtonOpenCart = styled.div`
  a {
    padding: 0.5rem;
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["base-card"]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`;
