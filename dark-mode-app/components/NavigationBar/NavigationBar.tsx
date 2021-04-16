import React from "react"
import styled from "styled-components"
import Course from "../../icon/Course"
import SVGView from "../SVGView"

const NavigationBarStyle = styled.div`
  background-color: ${({ theme }: { theme: any }) => theme.navigationBar.backgroundColor};
  border-radius: 30px 30px 0px 0px;
  box-shadow: ${({ theme }: { theme: any }) => theme.boxShadow};
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const NavigationBarDockItemStyle = styled.div`
  margin: 20px auto 35px auto ;
  max-width: 390px;
  height: 25px;
  /* background-color:black; */
  overflow:hidden;
`

const SVGViewStyle = styled.svg<{ focus: boolean }>`
  cursor: pointer;
  fill : ${(props) =>
    (!props.focus ? 
      ({ theme }: { theme: any }) => theme.navigationBar.icon.focusFill :
      ({ theme }: { theme: any }) => theme.navigationBar.icon.blurFill)};
`

const NavigationBar = () => {
  return (
    <NavigationBarStyle>
      <NavigationBarDockItemStyle>
        <SVGView
          icon={Course}
          width={25}
          height={25}
          style={SVGViewStyle} />
        <SVGView
          icon={Course}
          width={25}
          height={25}
          style={SVGViewStyle} />
        <SVGView
          icon={Course}
          width={25}
          height={25}
          style={SVGViewStyle} />
      </NavigationBarDockItemStyle>
    </NavigationBarStyle>
  )
}

export default NavigationBar