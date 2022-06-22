import { useState, useEffect  } from "react"
import { getApis } from "../helpers/ConsumoApi";
import { InfoGif } from "./InfoGif";



export const InputGit = () => {
    const [inputGit, setInputGit] = useState("maxsoll159")
    const [infoGit, setInfoGit] = useState([])
    useEffect(() => {
        getApis(inputGit).then((newInfo)=>setInfoGit(newInfo));
      }, []);
    const onInputGit = ({target}) =>{
        setInputGit(target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
       getApis(inputGit).then((newInfo)=>setInfoGit(newInfo));
    }
    console.log(infoGit)

    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Ingresa un usuario Git"
            value={inputGit}
            onChange={onInputGit}
            />
           <InfoGif />
        </form>
    )
}