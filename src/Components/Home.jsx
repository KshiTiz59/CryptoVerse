import React from 'react'
import {Link} from "react-router-dom" ; 
import './home.css'
import log from "../Components/pngwing.com.png"
const Home = () => {
  return (
    <>
   
    <div className="animat">
    <div className='conto'>
    <div className='bubbles'>
         <span style={{"--i":"11"}}> 
        <img className='l' src={log} alt="hello" />
         </span>
         <span style={{"--i":"12"}}>
        <img className='l' src={log} alt="hello" />
         </span>
         <span style={{"--i":"24"}}>
        <img className='l' src={log} alt="hello" />
         </span>
         </div>
         </div>
    <div className='header'>
      <p>
      CRYPTOVERSE
      </p>
    </div>
      <div className='contai'>
        <div className="c1">
        <div className='container-1'>
      <i class="fa-light fa-circle-dollar"></i>
         <p className='crypto'><Link className="link" to="/cryptoprice">CRYPTO-PRICE</Link> </p>  
      </div>
        </div>
     <div className="c2">
     <div className='container-2'>
           <p className='crypto'><Link className="link" to="/cryptonews">CRYPTO-NEWS</Link> </p>
      </div>
     </div>
       <div className="c3">
       <div className='container-3'>
      <i className="fa-solid fa-coins"></i>
          <p className='crypto'><Link className="link" to="/cryptodesc">CRYPTO-DESC</Link></p> 
      </div>
       </div>
   </div>
    </div>
   
   </>
  )
}

export default Home