import React, { useEffect, useState } from 'react'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function SubRightMainSection() {
  const [trendTop3, setTrendTop3] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const firstThree = data.coins.slice(0, 3)
        console.log(firstThree);
        setTrendTop3(firstThree);
      });
  }, []);
  return (
    <div className='lg:w-[30%] mt-4 max-lg:mt-0'>
      <div className='rounded-xl bg-[rgb(0,82,254)] text-center text-white flex flex-col justify-center items-center aspect-[4/5] max-lg:aspect-square'>
        <div className='font-bold text-2xl w-4/5 mb-2'>Get Started with KoinX for free</div>
        <div className='font-light text-sm w-4/5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste mollitia dicta neque at quidem expedita possimus officia esse veniam.</div>
        <img src="sample1.png" alt="ads" className='w-1/2'/>
        <button className='flex justify-around items-center bg-white text-black w-1/2 p-4 rounded-xl font-bold'>Get Started for free<FaArrowRightLong/></button>
      </div>
      <div className='h-4'></div>
      <div className='bg-white rounded-xl p-4'>
        <div className='font-semibold'>Trending Coins(24h)</div>
        <div className='flex flex-col w-full'>
          {
            trendTop3 &&
            trendTop3.map((items, key) => {
              return (
                <>
                  <div key={key} className='flex justify-between pt-4'>
                    <div>
                      <img src={items.item.small} alt={items.id} className='inline-block w-5 mr-3' />
                      <div className='inline-block text-sm font-semibold'>{items.item.name}({items.item.symbol})</div>
                    </div>
                    {
                      (items.item.data.price_change_percentage_24h.btc) < 0 
                      ? 
                      (<>
                        <div className='font-semibold text-red-500 bg-red-200 w-1/5 flex justify-between items-center'><MdOutlineArrowDropDown size={24}/>{Math.abs(parseInt(items.item.data.price_change_percentage_24h.btc)).toFixed(2)}%</div>
                      </>) 
                      : 
                      (<>
                        <div className='font-semibold text-green-500 bg-green-200 w-1/5 flex justify-between items-center'><MdOutlineArrowDropUp size={24}/>{(items.item.data.price_change_percentage_24h.btc).toFixed(2)}%</div>
                      </>)
                    }
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SubRightMainSection