
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Hoc = (Component) => {
  return (props)=>{

    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("AuthToken")

    if(!isAuthenticated){
        navigate("/")
    }

    return (<Component/>)
  }
}

export default Hoc
