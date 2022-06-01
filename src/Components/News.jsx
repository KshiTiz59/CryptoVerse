import React from 'react'
import "./news.css"
import moment from "moment" 
function News({ desc , title  , url, time , imag, av, pname }) {
    // console.log(time) ; 
    
    return (
      <>
    <div className='container'>
    <div className='coin'> 
    <span>
        <img className='image' src={imag} alt="news" />
        <div className='title'>
        <a href={url} > {title} 
    </a>    
        </div>
    </span>
    <div className='news-desc'>
    <p className='desc'>
         {desc}
         </p>
    </div>
    <span>
    <div className='news-provider'>
          <img className='source' src={av} alt="" />
    </div>
    <p className='pname'>{pname}</p>
    <p className='moment'>{moment({time}).startOf('ss').fromNow()}</p>

    </span>
  
    </div>
    </div>
    </>
  )
}

export default News ;   