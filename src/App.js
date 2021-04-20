import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Div2 from "./Div2";
import Div3 from "./Div3";
import Div4 from "./Div4";
import Div5 from "./Div5";
import Div6 from './Div6';
import "./img.css";

const Quad=()=>{



const [counter, setcounter] = useState(60);

React.useEffect(()=>{ 
    counter>0 && setTimeout(  () =>
     setcounter(counter-1),1000);
     
     
    
   },[counter] );
  



return(
<>

<div id="div1">

<div id="div1left">
<h3><h1> HODLINFO</h1>
Powered By Finstreet</h3></div>

<div id="div1middle">

<select>
  <option>INR</option>
</select>&nbsp;&nbsp;&nbsp;
<select>
  <option>BTC</option>
  <option>ETH </option>
  <option>USDT </option>
  <option>XRP </option>
  <option>TRX </option>
  <option>DASH </option>
</select>&nbsp;&nbsp;&nbsp;
<a href="#"> BUY BTC</a> 

</div>

<div id="div1right">

  <label id="timer"> {counter}</label>
  <button> <a href="#">Connect Telegram</a></button>
  <button>Light Mode  </button>
</div>

</div>
<Div2/>

<Div3/>

<Div4/>

<Div5/>

<Div6/>



</>
)





}
export default Quad;