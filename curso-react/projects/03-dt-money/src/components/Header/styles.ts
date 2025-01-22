import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(p) => p.theme["green-500"]};
  color: ${(p) => p.theme.white};
  padding: 0 1.125rem;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${(p) => p.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
