import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import "./Div4.css";




const Div4=()=>{










return(
<>
<div id="div4body">
<table>

<tr>


<th>#</th>
<th>Platform</th>
<th>Last Traded Price</th>
<th>Buy/&nbsp;Sell Price</th>
<th>Differnce</th>
<th>Savings</th>


</tr>

<tr>
<td> 1 </td>
<td> WazirX</td>
<td>Rs.46,63,534 </td>
<td>Rs.47,06,301/&nbsp;Rs.47,19,795 </td>
<td className="changed">7.84% </td>
<td className="changed">Rs.3,38,918</td>

</tr>


<tr>
<td>2 </td>
<td>Bitbns </td>
<td>Rs.46,74,317 </td>
<td>Rs.46,74,317/&nbsp;Rs.46,75,127 </td>
<td className="changed">8.09% </td>
<td className="changed">Rs.3,49,701</td>

</tr>

<tr>
<td>3</td>
<td>Giotus</td>
<td>Rs.46,50,000 </td>
<td>Rs.46,06,001/&nbsp;Rs.46,50,000 </td>
<td className="changed">7.50% </td>
<td className="changed">3,24,384</td>


</tr>


<tr>
<td>4</td>
<td>Colodax </td>
<td>Rs.25,83,138 </td>
<td>Rs.25,75,167/&nbsp;Rs.26,08,984 </td>
<td className="negative"> -40.27% </td>
<td className="negative"> 17,58,970 </td>


</tr>


<tr>
<td>5 </td>
<td>Zebpay </td>
<td>Rs. 47,50,000 </td>
<td >Rs47,60,000/&nbsp;Rs.47,48,000</td>
<td className="changed">9.84% </td>

<td className="changed">4,25,384 </td>


</tr>
<tr>
<td>6 </td>
<td>CoinDCX </td>
<td>Rs.46,73,359</td>
<td>Rs.46,73,359/&nbsp;Rs.46,77,714</td>
<td className="changed">7.01% </td>
<td className="changed">3,03,090 </td>


</tr>



</table>




</div>

</>
);




}

export default Div4;



