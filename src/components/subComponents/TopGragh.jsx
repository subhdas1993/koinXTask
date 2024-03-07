import React, { useEffect, useState } from 'react'
import TradingViewWidget from './TradingViewWidget';

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true
// https://api.coingecko.com/api/v3/search/trending
function TopGragh() {
  const [crpto, setCrpto] = useState([]);
  const [cusd, setCusd] = useState("");
  const [cinr, setCinr] = useState("");
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCrpto(data["bitcoin"]);
        setCusd(data["bitcoin"].usd);
        setCinr(data["bitcoin"].inr);
      });
  }, []);
  return (
    <div className='bg-white rounded-md p-6 max-lg:px-2 max-lg:py-3'>
      <div className='font-bold text-3xl'>Bitcoin</div>
      <div className='text-xl'>&#36;{cusd.toLocaleString('en-US')}</div>
      <div className='text-base'>&#8377;{cinr.toLocaleString('en-IN')}</div>
      <div className='w-full h-[70vh]'>
        <TradingViewWidget />
      </div>
    </div>
  )
}

export default TopGragh