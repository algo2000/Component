import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${({theme}: {theme: any}) => theme.btnBackground};
  color: ${({theme}: {theme: any}) => theme.btnForground};
`

const Button = () => {

  return (
    <>
      <ButtonStyle>
        
      </ButtonStyle>
    </>
  )
}

Button.defaultProps = {
  text: "button",
  onChange: (text: string) => {console.error(`Missing onChange prop: ${text}`)},
}

export default Button;