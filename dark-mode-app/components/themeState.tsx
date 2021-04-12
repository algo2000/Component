import { atom } from "recoil";

const themeState = atom({
  key: 'theme',
  default: 'light'
})

export default themeState;