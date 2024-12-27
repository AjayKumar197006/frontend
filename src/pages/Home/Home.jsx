import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import TopBanner from '../../components/TopBanner/TopBanner'
import Quotes from '../../components/Quotes/Quotes'
import Login from '../../components/Login/Login'

const Home = ()=>
{
    return(
        <div className="home">
            <TopBanner />
            <Navbar />
            <Hero />
            <Quotes />
            <Footer />
            <Login />

        </div>
    )
}

export default Home