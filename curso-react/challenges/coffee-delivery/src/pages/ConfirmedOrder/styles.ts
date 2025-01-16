import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
  margin-top: 5rem;

  h3 {
    font-size: 2rem;
    color: ${(p) => p.theme["yellow-dark"]};
    font-weight: bolder;
    font-family: "Baloo 2";
  }

  span {
    display: block;
    margin-top: 0.25rem;
  }
`;
export const ConfirmedOrderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const DetailsOrderContainer = styled.div`
  width: 32.875rem;
  border: 1px solid ${(p) => p.theme.purple};
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const IconMapColor = {
  purple: "purple",
  yellow: "yellow",
  orange: "yellow-dark",
} as const;

interface IconProps {
  bgcolor: keyof typeof IconMapColor;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[IconMapColor[props.bgcolor]]};
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`;
