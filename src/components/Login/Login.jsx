import {Link} from 'react-router-dom'
import {useState} from 'react'


const Login=()=>{
    const [values,setValues]=useState({
        email:"",
        password:""

    })

    const [error,setErrors]=useState({})

    const validation=(values)=>{
        alert("")
        let error={}
        const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


        if(values.email=== "")
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

        if(values.password=== "")
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
    }
    return(

        <>
          <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="bg-white p-3 rounded w-25">
                <form action="" onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-success w-100">Login</button>
                    <Link to ="/signup.js" className="btn btn-primary w-100  border text-decoration-none ">Create Account </Link>
                </form>
            </div>
          </div>


        </>

    )
}
export default Login