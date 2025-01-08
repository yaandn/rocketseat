import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Location = styled.div`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
`;

export const Cart = styled.div`
  a {
    background: ${(props) => props.theme["yellow-light"]};
    display: flex;
    padding: 0.5em;
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 6px;
    text-decoration: none;
    position: relative;

    .qtdd_items {
      background: ${(props) => props.theme["yellow-dark"]};
      height: 1.25rem;
      width: 1.25rem;
      color: ${(props) => props.theme.white};
      font-size: 0.75rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      border-radius: 50%;
      margin-top: -0.5rem;
      right: -0.5rem;
    }
  }
`;
