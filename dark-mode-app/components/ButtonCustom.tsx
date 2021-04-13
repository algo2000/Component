import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${({theme}: {theme: any}) => theme.buttonDesign.backgroundColor};
  color: ${({theme}: {theme: any}) => theme.buttonDesign.color};
  padding: 10px;
  border-radius: 10px;
`

type ButtonType = {
  text?: string | undefined,
  onClick?: any,
}

const ButtonCustom = ({text, onClick}:ButtonType) => {

  return (
    <>
      <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
    </>
  )
}

ButtonCustom.defaultProps = {
  text: "button",
  onClick: () => {},
}

export default ButtonCustom;