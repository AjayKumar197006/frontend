import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './components/Login/Login'
import Register from './components/Register/Register'



const App = ()=>
{
  return(
    <>
    <BrowserRouter>
      <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route path="/login.js" element={<Login />} />
            <Route path="/signup.js" element={<Register />} />
            

      </Routes>
     
    </BrowserRouter>
    
      
      
    
   </>
  )
}


export default App