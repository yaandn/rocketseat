import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.5rem;
    font-family: "Baloo 2";
  }
`;
export const CoffeeListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem 2.5rem;
`;
