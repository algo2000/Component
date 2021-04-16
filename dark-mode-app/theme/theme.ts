import lightTheme from './lightTheme'
import darkTheme from './darkTheme'

export const theme = {
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
    lightTheme,
    darkTheme,
}

export default theme;

// import { DefaultTheme } from "styled-components/native"

// declare module "styled-components" {
//   export interface DefaultTheme {
//     primaryColor: string
//     secondaryColor: string
//   }
// }

// export const lightTheme: DefaultTheme = {
//   primaryColor: "#333",
//   secondaryColor: "#666",
// }

// export const darkTheme: DefaultTheme = {
//   primaryColor: "#fff",
//   secondaryColor: "#cacaca",
// }