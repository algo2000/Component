import ISVGIcon from "../interfaces/ISVGIcon";

type SVGType = {
  icon: ISVGIcon,
  width?: number,
  height?: number,
  fill? : string,
}

const SVGView = ({
  icon,
  ...props
}: SVGType) => {

  return (
    <>
      <svg viewBox={icon.viewBox} width={props.width} height={props.height}>
        <path
          fill={props.fill}
          d={icon.d}
        />
      </svg>
    </>
  )
}

SVGView.defaultProps = {
  width: 27,
  height: 27,
  fill: "#000000",
}

export default SVGView