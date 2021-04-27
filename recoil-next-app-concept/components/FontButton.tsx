import { useRecoilState } from "recoil";
import fontSizeState from "./fontSizeState";

const FontButton = () => {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState)
	return(
		<button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
      Click to Enlarge
    </button>
	)
}

export default FontButton;