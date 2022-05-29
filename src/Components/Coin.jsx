import React from 'react'
import "./coin.css"
function Coin({name , icon , price , symbol , marketCap , rank , total , web , Avail}) {
  return (
    <div classname='container'>
    <div className='coin'> 
    <is> 
<span className='xx'>
<img  className='logo' src={icon} alt="" />
<span className='name'>Name : {name}
<span className='rank'>Rank : {rank}</span>
<span className='price'>Price : {price} $</span>
   <span className='symbol'>Symbol : {symbol}</span> 
  <span className='market'>Market Capital : {marketCap}</span>
  <span className='market'>Total Supply : {total}</span>
  <span className='market'>Avail. Supply : {Avail}</span>
  <span className='market'>Link : <a href={web}>{web}</a></span>
  </span>     
</span>
</is>
    </div>
    </div>
  )
}

export default Coin