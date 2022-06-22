
import { useState, useEffect  } from "react"
import { getApis } from "../helpers/ConsumoApi"

export const InfoGif = ({usu}) =>{
    const [infoGit, setInfoGit] = useState([])

    getApis(usu)
 
 
    
        
      console.log(getApis())
    return(
        <div>
            <h2></h2>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1></h1>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <h2></h2>
            </div>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <h2></h2>
            </div>
        </div>

    )
}