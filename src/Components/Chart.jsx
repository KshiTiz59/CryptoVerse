import React from 'react'
import { useState , useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS , Title ,Tooltip , LineElement , Legend , CategoryScale, LinearScale ,PointElement, Filler} from  "chart.js"
ChartJS.register(
    Title , Tooltip , LineElement , Legend ,Filler ,
    CategoryScale , LinearScale ,PointElement
)

function Chart({uid}){
  const [chart , setchart ]  = useState([]) ; 
  const  [timep ,settimep] = useState("1h") ; 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
            'X-RapidAPI-Key': 'd5b7d1e676msh052563ca3875628p152f44jsnca03cd34b509'
        }
    };
    console.log(timep)
    const getdata = async()=>{
           const data = await fetch(`https://coinranking1.p.rapidapi.com/coin/${uid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timep}`, options) ; 
           const jsondata = await data.json() ; 
           setchart(jsondata.data.history) ; 
           console.log(jsondata.data.history) ;  
    }
    
      console.log(d) ;
    useEffect(()=>{
        getdata() ; 
    }, [uid,timep]) ;

  var d = chart.map((x)=>{
    var a = new Date(x.timestamp*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + ' ' + month + ' ' + year  ;
  return time;
  })
  d.reverse() ; 
  console.log(d) ;  
    return (
    <div >
      <div className="select">

    
      <select 
      onChange={(event)=>settimep(event.target.value)}
     defaultValue="74"
       className='select'
        placeholder='select timeperiod'>
        <option value="3h">3h</option>
    <option  value="24h">24h</option>
    <option  value="7d">7d</option>
    <option  value="30d">30d</option>
    <option  value="3m">3m</option>
    <option  value="1y">1y</option>    
    <option  value="3y">3y</option>
    <option  value="5y">5y</option>
      </select>
      </div>
      <div className="line">

    
      <Line style={{width:'600px' , height:"800px"}} data={{
     labels : d ,
     datasets:[
         {
             label: "Price in $"  , 
             data: chart.map(x=>x.price), 
             backgroundColor:"rgba(22, 2, 170, 0.4)" , 
             borderColor:"blue" , 
             tension:0.9 ,  
            fill:true , 
               pointRadius:3 ,
            pointBackgroundColor:"blue" , 
         }]}}
         />
           </div>
</div>
  )
}

export default Chart