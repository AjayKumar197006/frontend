import './Navbar.css'

const Navbar= () =>
{
    return(
        <div className="container flex nav">
          <div><a href="/" className="logo">
            
            <img src="https://cricketimages06.s3.ap-south-1.amazonaws.com/logo.jpg" />
          </a>
          </div>
         <div className="menu">

              
               <ul className="flex">
                <li><a href="/" className="hover-links">Home</a></li>
                <li><a href="/Stats.js" className="hover-links">Stats</a></li>
                <li><a href="/quiz.js" className="hover-links">Quiz</a></li>
                <li><a href="/signin" className="hover-links secondary-button">Signin</a></li>
                <li><a href="/signup" className="hover-links primary-button">Signup</a></li>
               </ul>
              
              
               
         </div>
      </div>
        
    )
}

export default Navbar