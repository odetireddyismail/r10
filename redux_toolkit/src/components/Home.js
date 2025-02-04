import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement ,produ} from '../redux/Reducer'
import axios from 'axios'

const Home = () => {

  const data=useSelector((l)=>console.log(l.Reducer.products))
  const dispatch=useDispatch()

const Data=async ()=>{
  const pro= await axios('https://fakestoreapi.com/products')
 

  dispatch(produ(pro.data))
}

  useEffect(()=>{
   Data()
  },[])
  return (
    <div><h1>Home</h1>

   <NavLink to='/about'>About</NavLink> 

     <button onClick={()=>dispatch(increment())}>+++++++++++++Add</button>
     <button onClick={()=>dispatch(decrement())}>--------Add</button>
    </div>
  )
}

export default Home