import { useRecoilState, useRecoilValue } from "recoil";
import fontSizeState, { fontSizeLabelState } from "./fontSizeState";

const FontButton = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState)
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <button onClick={() => setFontSize((size) => size + 1)} style={{ fontSize }}>
        Click to Enlarge
    </button>
      <div>Current font size: ${fontSizeLabel}</div>
    </>
  )
}

export default FontButton;