import './portfolio.css'

const Portfolio = () => {
  return (
    <div id="portfolio">
        <div class="container">
            <div class="sub-title">My Projects</div>
            <div class="work-list">
                <div class="work">
                    <img src="../images/newsapp.jpeg"/>
                    <div class="layer">
                        <h3>News App</h3>
                        <p>Project Link</p>
                        <a href="https://github.com/Imam-Ghazi-Khan/RetrofitJava"><i class="fa-solid fa-link"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="../images/webvideoshortcut.jpeg"/>
                    <div class="layer">
                        <h3>Websites&Videos shortcut App</h3>
                        <p>Project link</p>
                        <a href="https://github.com/Imam-Ghazi-Khan/Websites-Videos-Shortcut"><i class="fa-solid fa-link"></i></a>
                    </div>   
                </div>
                <div class="work">
                    <img src="../images/videoexoplayer.jpeg"/>
                    <div class="layer">
                        <h3>VideoExoplayer App</h3>
                        <p>Project link</p>
                        <a href="https://github.com/Imam-Ghazi-Khan/VideoExoplayer"><i class="fa-solid fa-link"></i></a>
                    </div>
                </div>
             
                
            </div>  
            <a href="https://github.com/Imam-Ghazi-Khan" class="btn">See more</a>  
        </div>
    </div>
  )
}

export default Portfolio