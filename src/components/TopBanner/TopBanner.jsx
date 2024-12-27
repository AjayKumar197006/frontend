import {useState,useEffect} from 'react'
import './TopBanner.css'

function TopBanner()
{
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://cric-api-grge.onrender.com/TopBanner')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    
    return (
        <>
          
          <div className="flex container topbanner">
          {
            data.map((values)=>(
              <div key={values.id}>
                <h2>{values.match_type}</h2>
                <p>Starts </p>
              </div>
              
            ))
          }
          </div>

          
         
        
         

         
        
         
         
          
        

        </>
    )
}

export default TopBanner