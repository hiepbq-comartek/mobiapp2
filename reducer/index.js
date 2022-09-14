import { useReducer } from "react"
import { init } from "./init"
import { reduce } from "./reduce"

export const Reducer = ()=>{
  const [state,dispart] = useReducer(reduce,init)
  return 
}