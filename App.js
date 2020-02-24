import React, {useContext} from "react"
import {ThemeContext} from "./ThemeProvider"
import Button from "./Button"
import NavBar from "./NavBar"
import "./Style.css"

function App(){
    const context = useContext(ThemeContext)
    console.log(context.theme)
    return(
        <div>
            <NavBar />
            <Button />
        </div>
    )
}   


export default App

