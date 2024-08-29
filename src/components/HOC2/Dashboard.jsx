import React from 'react'
import Hoc from './Hoc'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem('AuthToken');
        navigate('/');
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to dashboard </p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Hoc(Dashboard)
