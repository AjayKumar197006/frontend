import {Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
const Router_Data=()=>{
    return(
        <>
        
         <Routes>
            <Route path="/login.js" element={<Login />} />
            <Route path="/signup.js" element={<Register />} />

         </Routes>
        </>
        
        
    )
}

export default Router_Data