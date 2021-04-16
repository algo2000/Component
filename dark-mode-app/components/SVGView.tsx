import styled, { StyledComponent } from "styled-components";
import ISVGIcon from "../interfaces/ISVGIcon";

type SVGType = {
  icon: ISVGIcon,
  width?: number,
  height?: number,
  style : StyledComponent<"svg", any, {}, never>
}

const SVGView = ({
  icon,
  ...props
}: SVGType) => {

  const SVGStyle = props.style;

  return (
    <SVGStyle viewBox={icon.viewBox} width={props.width} height={props.height}>
      <path
        d={icon.d}
      />
    </SVGStyle>
  )
}

SVGView.defaultProps = {
  width: 27,
  height: 27,
  style: styled.svg``,
}

export default SVGView