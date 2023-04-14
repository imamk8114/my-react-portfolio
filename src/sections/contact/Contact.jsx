import './contact.css'

const Contact = () => {
  return (
    <div id="contact">
    <div id="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact Me</h1>
                <p><i class="fa-solid fa-paper-plane"></i>igkhan1710@gmail.com</p>
                <p><i class="fa-solid fa-square-phone"></i>9748934665</p>
                <a href="docs/Resume_Imam Ghazi Khan.pdf" download class="btn btn2 btn3">Download CV</a>
            </div>
            <div class="contact-right">
            <form onsubmit="sendEmail(); reset(); return false;">
                <input type="text" name="Name" id="name" placeholder="Your Name" required=""/>
                <input type="email" name="email" id="email" placeholder="Your Email" required=""/>
                <textarea name="Message" id="message" rows={6} placeholder="Your Message" defaultValue={""}/>
                <button type="submit" className="btn btn2 btn4">Submit</button>
            </form>
            </div>
        </div>
    </div>
</div> 
  )
}

export default Contact