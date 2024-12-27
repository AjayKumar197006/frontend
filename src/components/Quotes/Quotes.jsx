import {useState,useEffect} from 'react'
import './Quotes.css'

const Quotes =()=>
{
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch("https://cric-api-grge.onrender.com/randomquote")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className="Quotes-Section">
            
            {
                data.map(values =>
                
                    <div key={values.id} className="container flex quotes">
                        <h1>{values.quote}</h1>
                        
                        <p>{values.name}</p>
                    </div>
                
                )
            }
            
                
        </div>
    )
}

export default Quotes

