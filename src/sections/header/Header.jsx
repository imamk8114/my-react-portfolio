import { useState } from 'react'
import './header.css'

const sidebar_open_icon = "fa-xmark";
const sidebar_close_icon = "fa-bars"

const Header = () => {
    const [collapseState, setCollapseState] = useState("")
    const [icon, setIcon] =useState(sidebar_close_icon);

    const handleClick =()=>{
        if(icon===sidebar_close_icon){
            setIcon(sidebar_open_icon)
            setCollapseState("sidebar-expanded")
        }
        else{
            setIcon(sidebar_close_icon)
            setCollapseState("sidebar-collapsed")
        }
    }
  return (
    <div id="header">
    <div className="container">
        <nav className='navbar'>
            <h1>Imam <span>Ghazi</span> Khan</h1>
            <ul className={`sidemenu ${collapseState}`}> 
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <i className={`fas fa-solid ${icon}`} style={{zIndex:10}} onClick={handleClick}></i>
        </nav>
    </div>      
</div>
  )
}

export default Header