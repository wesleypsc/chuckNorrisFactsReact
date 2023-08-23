import { useState } from 'react'
import './ThemeSwitcher.css'

function switchTheme(){
    document.body.classList.toggle('light')
}

function ThemeSwitcher(){
    return(
        <div className='theme-switcher'>
            <button onClick={switchTheme}></button>
        </div>
    )
}

export default ThemeSwitcher