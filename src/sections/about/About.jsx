import './about.css'

const About = () => {
  return (
    <div id="about">
        <div class="container">
                    <h1 class="sub-title">About Me</h1>
                    <br/>
                    <p>An aspiring software development engineer, primarily interested in Android development, but always open to learning
                        new and different tech stacks.
                        Passionate about coding and solving problems with great interest in data structures and developing optimized algorithms.</p>
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Android development</span><br/>Java8, Kotlin</li>
                            <li><span>Web development</span><br/>HTML, CSS, javaScript</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2024</span><br/>9.185(of 4 sems) : Btech from RCC Institute of Information Technology</li>
                            <li><span>2019</span><br/>72.75% : Sunrise(Eng.Med)SChool</li>
                            <li><span>2017</span><br/>80.6% : Sunrise(Eng.Med)School</li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default About