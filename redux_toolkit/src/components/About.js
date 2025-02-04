import React from 'react'
import { NavLink } from 'react-router-dom'

import { incre,decre } from '../redux/CpoyReducer'
import { useSelector,useDispatch } from 'react-redux'
const About = () => {

  const get=useSelector((t)=>console.log(t.reducer.add))

  const dispatch=useDispatch()
  return (
    <div><h1>About</h1>

    <button onClick={()=>dispatch(incre())}>Incre</button>
    
    <NavLink to='/'>Home</NavLink> 
    </div>
  )
}

export default About