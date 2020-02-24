import React, {useContext} from "react"
import {ThemeContext} from "./ThemeProvider"
export default function NavBar(props){
    const {theme} = useContext(ThemeContext)
    return(
        <div className = {`${theme === "light" ? "dark" : "light"}Theme`}>
            <h2>{theme === "light" ? "dark" : "light"}</h2>
        </div>
    )
}

