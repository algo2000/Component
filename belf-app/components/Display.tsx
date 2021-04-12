import { useRecoilState, useRecoilValue } from "recoil"
import { charState, nameState } from "./states"

const Display = () => {
  const charName = useRecoilValue(charState)
  const [name, setName] = useRecoilState(nameState)

  return (
    <>
      <p>My name is {name}</p>
      <p>My name has {charName} characters</p>
    </>
  )
}

export default Display