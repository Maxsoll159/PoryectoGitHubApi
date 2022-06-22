import { useState  } from "react"
import {InfoGif} from "./InfoGif"

export const InputGit = () => {
    const [inputGit, setInputGit] = useState("maxsoll159")

    const onInputGit = ({target}) =>{
        setInputGit(target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    }

    console.log(inputGit)
    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Ingresa un usuario Git"
            value={inputGit}
            onChange={onInputGit}
            />
           <InfoGif usu={inputGit}/>
        </form>
    )
}