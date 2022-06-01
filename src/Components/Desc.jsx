import React, { useEffect, useState } from 'react'
import "./desc.css"
import HTMLReactParser from 'html-react-parser';
import { FcSearch} from "react-icons/fc";
import {   AiOutlineDollarCircle, AiOutlineThunderbolt , AiOutlineTrophy} from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import millify from "millify";
const Desc = () => {
     const[search , setsearch ] = useState("") ; 
     const[uuid , setuuid] =  useState("") ; 
     const [co , setco] = useState("");
     const [desc , setdesc] = useState(null) ;   
     const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509'
        }
    };
     useEffect(()=>{
        const getU = async ()=>{
    
         const profile = await fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=${search}&orderDirection=desc&limit=100&offset=0`, options)
            const jsonprofile = await profile.json() ;
            setuuid(jsonprofile.data.coins[0].uuid); 
             console.log(jsonprofile.data.coins[0].uuid)  ; 
             const d = await fetch(`https://coinranking1.p.rapidapi.com/coin/${jsonprofile.data.coins[0].uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options) ; 
          const jsd = await d.json() ;      
          setdesc(jsd.data) ; 
          console.log(desc);  
      }; 
          getU() ; 
      },[search])
      console.log(search) ;
      console.log(desc);  
   
     return (
        <>
       <div className='s'>
           <div className="su">
           <span className='search' >
            <input type="text" placeholder='search coin..' onChange={(e)=>{setco(e.target.value)}} />
            <span className='fcsearch'>
            <FcSearch onClick={()=>{ 
                setsearch(co) 
                }} />
            </span>
            </span>
           </div>
            </div> 
            {desc===null ? (<p> Search for any crypto coin </p>) : 
            (
                
                <div className="large">
                <div className='small'>
                   <div className='sm'>
                       <p className='v'>{desc.coin.name} Value Statistics</p>
                       <p className='zz'>An Overview showing the stats of {desc.coin.name}</p>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'>< AiOutlineDollarCircle className='dolar'/>  Price to USD : {millify(desc.coin.price)} $</span>   
                       </div>
                       </div>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'><GiRank3 className='dolar'/>Rank : {desc.coin.rank}</span>   
                       </div>
                       </div>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'><AiOutlineDollarCircle className='dolar'/>  Market Cap : { millify(desc.coin.marketCap)} $</span>   
                       </div>
                       </div>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'>< AiOutlineTrophy className='dolar'/>All-Time-High(daily avg.) :{ millify(desc.coin.allTimeHigh.price)} $</span>   
                       </div>
                       </div>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'>< AiOutlineThunderbolt className='dolar'/>No. of Exchanges : {desc.coin.numberOfExchanges} </span>   
                       </div>
                       </div>
                       <div className='pric'>
                       <div className="pr">
                       <span className='pax'>< AiOutlineThunderbolt className='dolar'/>No. of Markets : {desc.coin.numberOfMarkets} </span>   
                       </div>
                       </div>
                   </div> 
                    </div>
                   <div className="small1"> 
                   <div className="sm1">
                       <div className="su1">
                       <h1 >Description</h1>
                        <div className='set'>
                            <p className='du'>
                                <h3>What is{desc.coin.name} ?</h3> 
                                {HTMLReactParser(desc.coin.description)}
                            </p>
                        </div>
                       </div>
                      
                   </div>
                   </div>
                </div>
            )
         } 
      </>
       

  )
}

export default Desc  ; 