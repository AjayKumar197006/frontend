import './Footer.css'

const Footer = () =>
{
    return(
        

     <div className="footer">
        <div className="container flex footer-container">
            <a href="/" className="logo">
            <img src="https://cricketimages06.s3.ap-south-1.amazonaws.com/logo.jpg" /> </a>
            <div className="link-column flex">
                <h4>Menu</h4>
                <a href="/" className="hover-link">Home</a>
                <a href="/stats.js" className="hover-link">Stats</a>
                <a href="/quiz.js" className="hover-link">Quiz</a>
            </div>
         <div className="link-column flex">
                <h4>Others</h4>
                <a href="/about.js" className="hover-link">About</a>
                <a href="/careers.js" className="hover-link">Careers</a>
                <a href="/contactus.js" className="hover-link">Contact Us</a>
            </div>
        </div>
     </div>


    )
}

export default Footer