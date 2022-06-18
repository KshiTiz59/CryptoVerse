import React, { useEffect, useState } from 'react'
  import './crypto.css'
import CryptoCoin from "../Components/Coin"
const Crypto=()=>{
    const [Coin  , setCoin] = useState([]) ;  
    const [searchcoin ,  setsearchcoin] = useState("")  ; 
   const  getData= async ()=>{
           try{
            const Data = await fetch('https://api.coinstats.app/public/v1/coins?skip=0') ;
            const jsonData =  await Data.json() ; 
            console.log(jsonData) ; 
              setCoin(jsonData.coins) ;  
            console.log(jsonData) ;  
           }
           catch(err) {
               console.log(err) ; 
           }
    
   }
    useEffect(()=>{
            getData();  
   }, []) ; 
  
        const filterdata =  Coin.filter((data)=>{
            return data.name.toLowerCase().includes(searchcoin.toLowerCase()) ; 
        })
         const data = filterdata.map( (value)=>{
            return <CryptoCoin name={value.name} ico={value.icon} price={value.price} symbol={value.symbol} marketCap ={value.marketCap} rank={value.rank} total ={value.totalSupply} web ={value.websiteUrl} Avail={value.availableSupply}/>  ; 
   })
   
    return (
         <>
         <div className='cryptoHeader'>
  
                    <div className='in'>
                    <input className='inputr' type="text"  placeholder='Search Crypto..' onChange={(event)=>{setsearchcoin(event.target.value)}}/>
                    </div>
                </div> 
                <div className='cryptoDisplay'>
                   {data}
                </div>
                
         </>
                
        
    ) ; 
}
export default Crypto ; 
