import React, {useContext} from "react"
import {ThemeContext} from "./ThemeProvider"
function Button(props){
    const {theme, toggleTheme}= useContext(ThemeContext)
    return(
        <div>
            <button 
            className = {`${theme}Theme`} 
            onClick = {toggleTheme}>
                Change Theme
                </button>
        </div>
    )
}
export default Button

