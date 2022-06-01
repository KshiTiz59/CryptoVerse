import React, { useEffect, useState } from 'react'
import News from '../Components/News';
import './cryptonews.css'
import { FcSearch} from "react-icons/fc";
const Cryotonews = () => {
      const [news , setNews ]= useState([]) ; 
       const [coin, setcoin] = useState("cryptocurrency");
       const [c ,setc] = useState("cryptocurrency") ;   
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509'
        }
    };
  const getData =async ()=>{
        try{
            const data = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${coin}&freshness=Day&textFormat=Raw&safeSearch=Off`, options); 
            const jsondata =  await data.json() ;  
            setNews(jsondata.value) ; 
            console.log(jsondata.value) ;  
        }
        catch(err)
        {
            console.log(err) ; 
        }
  
  }
  useEffect(()=>{
    getData() ; 
}, [coin]); 

    const x = news.map((value)=>{
        return <News desc={value.description} title={value.name} url={value.url} time={value.datePublished} imag={value?.image?.thumbnail?.contentUrl} av={value?.provider[0]?.image?.thumbnail?.contentUrl} pname={value.provider[0].name}/>
    }); 
    // console.log(x) ; 
    return (
        <>
        <h1>CRYPTO NEWS</h1>
        {
        coin==="" ? (<p>NO data found...!!</p>) : 
        (
            <>
        <div className='search'>
            <span className='search' >
            <input type="text" placeholder='search coin..' onChange={(event)=>{setc(event.target.value)}} />
            <span className='fcsearch'>
            <FcSearch  onClick={()=>{
            setcoin(c)
        }}/>
            </span>
        
            </span>

      </div>
     <div className='container'>
      {x}
  </div>
  </>
  )
        }
        </>
     
  )
}

export default Cryotonews