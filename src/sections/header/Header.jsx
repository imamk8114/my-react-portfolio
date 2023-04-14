import './header.css'


const Header = () => { 
  return (
    <div id="header">
    <div className="container">
        <nav>
            <h1>Imam <span>Ghazi</span> Khan</h1>
            <ul id="sidemenu"> 
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <i className="fas fa-solid fa-xmark" onclick="{closemenu}"></i>
            </ul>
            <i className="fas  fa-solid fa-bars" onclick="{openmenu}"></i>
        </nav>
        <div className="header-text">
            <p>Android and Web developer</p>
            <br/>
            <h1>Hi, I'm Imam <br/><span>Ghazi</span> Khan from India</h1>
        </div>
    </div>
</div>
  )
}

export default Header