import React from "react"
import { InputGit } from "./Components/InputGit"
import "./Style.css"

export const GitPrincipal = () =>{
    return (
        <div className="contenedor">
            <h1>Busca un usuario GitHub </h1>
            <InputGit/>
        </div>

    )
}