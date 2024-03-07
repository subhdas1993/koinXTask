import React from 'react'
import { IoInformationCircleSharp } from "react-icons/io5";

function Performance() {
  return (
    <>
      <div className='bg-white rounded-md p-6 max-lg:px-2 max-lg:py-3'>
        <div className='font-semibold text-xl'>Performance</div>
        <div className='my-3'>
          <div className='flex'>
            <div className='w-1/5'>
              <div>Today's Low</div>
              <div>65,458</div>
            </div>
            <div className='w-3/5 flex items-center'>
              <div className='rangebarcolor'></div>
            </div>
            <div className='w-1/5 text-right'>
              <div>Today's High</div>
              <div>75,458</div>
            </div>
          </div>
          <div className='flex mt-3'>
            <div className='w-1/5'>
              <div>52W Low</div>
              <div>65,458</div>
            </div>
            <div className='w-3/5 flex items-center'>
              <div className='rangebarcolor'></div>
            </div>
            <div className='w-1/5 text-right'>
              <div>52W High</div>
              <div>75,458</div>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-center text-gray-700 font-medium text-lg my-3'>Fundamentals<IoInformationCircleSharp className='ml-2' /></div>
        <div className='fundagrid border-2'>
          <div>
            <div>Bitcoin Price</div>
            <div>$16,815.46</div>
          </div>
          <div>
            <div>Market Cap</div>
            <div>$555,555,555,555</div>
          </div>
          <div>
            <div>24h Low / 24h High</div>
            <div>$16,000/$20,000</div>
          </div>
          <div>
            <div>Market Cap Dominance</div>
            <div>42.56%</div>
          </div>
          <div>
            <div>7d Low / 7d High</div>
            <div>$17,000/$21,000</div>
          </div>
          <div>
            <div>Volumn / Market Cap</div>
            <div>0.0781</div>
          </div>
          <div>
            <div>Trading Volume</div>
            <div>$23,256,498,785</div>
          </div>
          <div>
            <div>All-Time High</div>
            <div>
              <div><div>$96,047.77</div><div>-75.6%</div></div>
              <div>Nov 10, 2021(about 1 year)</div>
            </div>
          </div>
          <div>
            <div>Market Cap Rank</div>
            <div>#1</div>
          </div>
          <div>
            <div>All-Time Low</div>
            <div>
              <div><div>$96,047.77</div><div>-75.6%</div></div>
              <div>Nov 10, 2021(about 1 year)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Performance