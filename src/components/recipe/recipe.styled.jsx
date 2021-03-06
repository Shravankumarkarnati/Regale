import styled from "styled-components";

const btnStyles = `transition: all 0.3s;
padding: 1rem;

&:focus {
  outline: none;
}

svg {
  width: 2.6rem;
  height: 2.6rem;
}
`;

export const BtnStyled = styled.button`
  ${btnStyles};
  background-color: ${(props) => props.theme.colorSecondary};
  &:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    & svg {
      fill: ${(props) => props.theme.colorSecondary};
    }
  }
  svg {
    fill: ${(props) => props.inputcolor || props.theme.colorTeritary};
  }
`;

export const LinkStyled = styled.a`
  ${btnStyles};
  background-color: ${(props) => props.theme.colorSecondary};
  &:hover {
    background-color: ${(props) => props.theme.colorPrimary};
    & svg {
      fill: ${(props) => props.theme.colorSecondary};
    }
  }
  svg {
    fill: ${(props) => props.inputcolor || props.theme.colorTeritary};
  }
`;

export const Floater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colorPrimary};
  border-radius: 0.5rem;
  overflow: hidden;

  position: fixed;
  top: 20rem;
  right: 10rem;

  @media only screen and (max-width: ${(props) => props.theme.screenTabletP}) {
    top: 20rem;
    right: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.screenMobileL}) {
    top: 40rem;
    right: 2rem;
  }
`;
