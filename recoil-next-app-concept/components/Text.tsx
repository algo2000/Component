import { useRecoilState } from "recoil";
import fontSizeState from "./fontSizeState";

const Text = () => {
  const [fontSize] = useRecoilState(fontSizeState);
  return <p style={{fontSize}}>This text will increase in size too.</p>;
}

export default Text