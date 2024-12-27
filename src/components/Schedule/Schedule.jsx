import {useState,useEffect} from 'react'
import './Schedule.css'


const Schedule=()=>
{
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch("https://cricket-schedule-1.onrender.com/schedule")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
        
    },[])
    return(

        <div className="top-banner">
            {
                data.map(values =>

                    <div key={values.seq} className="banner-content container">
                        <p className="matches">{values.matches}</p>
                        <p>Starts {values.time}</p>
                    </div>

                )
            }

        </div>

    )
}

export default Schedule