import { useRef } from "react"

export const useInput = (initialValue = null) => {
  let ref = useRef(initialValue);

  const setRef = (node) => {
    ref = node
  }

  const handleRef = () => {
    ref.scrollIntoView()
  }
  return [ref, setRef, handleRef];
}