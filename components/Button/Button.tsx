import styled from "styled-components";

interface IButton {
  children: string;
  buttonWidth?: number;
}

interface IArrowButton {
  buttonWidth?: number;
}

export function Button({ children, buttonWidth }: IButton) {
  return (
    <ArrowButton buttonWidth={buttonWidth} className="learn-more">
      <Circle className="circle" aria-hidden="true">
        <ArrowIcon className="icon arrow"></ArrowIcon>
      </Circle>
      <ButtonText className="button-text">{children}</ButtonText>
    </ArrowButton>
  );
}

const ArrowButton = styled.button<IArrowButton>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;

  width: ${(props) => props.buttonWidth + "rem" || "auto"};
  height: auto;

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    /* background: #fff; */
    background: var(--main-color2);
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    /* color: #fff; */
    color: var(--main-color2);
  }
`;

const Circle = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  /* background: #282936; */
  background: var(--accent-color1);
  border-radius: 1.625rem;
`;

const ArrowIcon = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  /* background: var(--accent-color1); */

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;

  &::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    /* border-top: 0.125rem solid #fff; */
    /* border-right: 0.125rem solid #fff; */
    border-top: 0.125rem solid var(--main-color2);
    border-right: 0.125rem solid var(--main-color2);
    transform: rotate(45deg);
  }
`;

const ButtonText = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  /* color: #282936; */
  color: var(--main-color2);
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`;
