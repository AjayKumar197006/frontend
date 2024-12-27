import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";

const Register=()=>{

    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""

    })

    const navigate=useNavigate()

    const [error,setErrors]=useState({})




    const validation=(values)=>{
        
        let error={}
        const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(values.name === "")
            {
                error.name="name should not be empty"
            }
            else
            {
                error.name=""
            }


        if(values.email === "")
        {
            error.email="Email should not be empty"
        }
        else if(!email_pattern.test(values.email))
        {
            error.email="Email did not match"
        }
        else
        {
            error.email=""
        }

        if(values.password === "")
            {
                error.password="Password should not be empty"
            }
            else if(!password_pattern.test(values.password))
            {
                error.password="Password did not match"
            }
            else
            {
                error.password=""
            }

        return error;

    }

    const handleInput =(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }

    

    const handleSubmit=(event)=>{
        event.preventDefault()
        setErrors(validation(values))
        console.log(values)
        if(error.name === "" && error.email === "" && error.password === "")
        {
            axios.post("http://localhost:8000/signup",values)
            .then(res => {navigate('/')})
            .catch(err=>console.log(err))

        }
    }
    return(
        <>
          <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="bg-white p-3 rounded w-25">
                <form action="" onSubmit={handleSubmit}>
                   <div className="mb-3">
                        <label htmlFor="text">Name</label>
                        <input type="text" placeholder="enter your name" name="name" onChange={handleInput} className="form-control rounded-0" />
                        {error.name && <span className="text-danger">{error.name}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="enter your email" name="email" onChange={handleInput} className="form-control rounded-0" />
                        {error.email && <span className="text-danger">{error.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="enter your passsword" name="password" onChange={handleInput} className="form-control rounded-0" />
                        {error.password && <span className="text-danger">{error.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100">Register</button>
                    <Link to ="/login.js" className="btn btn-primary w-100  border text-decoration-none ">Login</Link>
                </form>
            </div>
          </div>

        </>
    )
}
export default Register