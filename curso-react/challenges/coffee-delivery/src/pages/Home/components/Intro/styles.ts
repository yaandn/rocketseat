import styled from "styled-components";

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 0;

  .textContainer {
    width: 36.75rem;
  }

  h1 {
    font-family: "Baloo 2";
    font-size: 3rem;
    line-height: 130%;
    font-weight: bolder;
    color: ${(porps) => porps.theme["base-title"]};
    margin-bottom: 1rem;
    width: 100%;
  }

  .subtitle {
    display: block;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(porps) => porps.theme["base-subtitle"]};
    margin-bottom: 4rem;
  }

  .highlights {
    display: flex;
    width: 35.435rem;
    height: 5.25rem;
    width: 100%;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;

    flex-direction: column;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  .highlight-icon {
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
`;

const bgColorIcon = {
  orange: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

interface IconProps {
  bgcolor: keyof typeof bgColorIcon;
}

export const Icon = styled.div<IconProps>`
  background-color: ${(props) => props.theme[bgColorIcon[props.bgcolor]]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`;
