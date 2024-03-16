import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function YouMayAlsoLike() {
  const [trendTop, setTrendTop] = useState([]);
  const [trendTop2, setTrendTop2] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.coins);
        setTrendTop(data.coins);
        console.log(data.nfts);
        setTrendTop2(data.nfts);
      });
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]
  };
  return (
    <div className='flex justify-center h-[30svh]'>
      <div className='w-11/12'>
        <div className='h-4'></div>
        <div className='font-semibold text-xl'>You May Also Like</div>
        <div className='h-4'></div>
        <Slider {...settings}>
        {
            trendTop2 &&
            trendTop2.map((items, key) => {
              return (
                <>
                  <div key={key} className='w-4/5 h-24 relative p-2 border border-2 rounded-xl'>
                    <div className='absolute z-10'>
                      <div className='flex'><img src={items.thumb} alt={items.name} className='w-7 mr-3' />{items.name}</div>
                    </div>
                    <img src={items.data.sparkline} alt={items.name} className='w-3/4 absolute right-0 bottom-0 z-0' />
                  </div>
                </>)
            })
          }
        </Slider>
        <div className='h-4'></div>
        <div className='font-semibold text-xl'>Trending Coins</div>
        <div className='h-4'></div>
        <Slider {...settings}>
          {
            trendTop &&
            trendTop.map((items, key) => {
              return (
                <>
                  <div key={key} className='w-4/5 h-24 relative p-2 border-2 rounded-xl'>
                    <div className='absolute z-10'>
                      <div className='flex'><img src={items.item.small} alt={items.item.name} className='w-7 mr-3' />{items.item.name}</div>
                    </div>
                    <img src={items.item.data.sparkline} alt={items.item.name} className='w-3/4 absolute right-0 bottom-0 z-0' />
                  </div>
                </>)
            })
          }
        </Slider>
        <div className='h-10'></div>
      </div>
    </div>

  )
}

export default YouMayAlsoLike