import React from "react"
import styled from "styled-components"
import Course from "../icon/Course"
import SVGView from "./SVGView"

const NavigationBarStyle = styled.div`
  background-color: ${({ theme }: { theme: any }) => theme.navigationBar.backgroundColor};
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const NavigationBarDockItemStyle = styled.div`
  margin: 20px auto 35px auto ;
  max-width: 390px;
  height: 25px;
  background-color:black;
  overflow:hidden;
`

const SVGViewStyle = styled(SVGView)`
  fill: ${({ theme }: { theme: any }) => theme.navigationBar.icon.focusFill};
`

const NavigationBar = () => {
  return(
    <NavigationBarStyle>
      <NavigationBarDockItemStyle>
        <SVGViewStyle 
          icon={Course} 
          width={20}
          height={20}/>
      </NavigationBarDockItemStyle>
    </NavigationBarStyle>
  )
}

export default NavigationBar