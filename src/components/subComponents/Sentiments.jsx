import React from 'react'
import { IoInformationCircleSharp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressBar from '../ProgressBar';

function Sentiments() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },]
  };
  return (
    <>
      <div className='bg-white rounded-md p-6 max-lg:px-2 max-lg:py-3'>
        <div className='font-semibold text-xl'>Sentiments</div>
        <div className='flex justify-start items-center text-gray-700 font-medium text-lg my-3'>Key Events<IoInformationCircleSharp className='ml-2' /></div>
        <Slider {...settings}>
          <div className='sentimentSlider'>
            <div>
              <FaNewspaper size={28} className='rounded-full bg-sky-400 w-12 h-12 p-2' />
              <div className='w-4/5 ml-2 text-sm'>
                <div className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ab veritatis earum et harum suscipit facere voluptatibus aut libero adipisci.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio laborum a natus blanditiis? Suscipit ut sapiente, minima fuga iure quae doloribus architecto consequuntur sint perferendis nulla. Maxime fugit rem omnis, magnam, vitae quibusdam tenetur a at sequi harum esse? Autem dicta velit veritatis facere accusantium quisquam veniam laboriosam atque!</div>
              </div>
            </div>
          </div>
          <div className='sentimentSlider sseven'>
            <div>
              <BsGraphUpArrow size={28} className='rounded-full bg-green-400 w-12 h-12 p-2' />
              <div className='w-4/5 ml-2 text-sm'>
                <div className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ab veritatis earum et harum suscipit facere voluptatibus aut libero adipisci.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio laborum a natus blanditiis? Suscipit ut sapiente, minima fuga iure quae doloribus architecto consequuntur sint perferendis nulla. Maxime fugit rem omnis, magnam, vitae quibusdam tenetur a at sequi harum esse? Autem dicta velit veritatis facere accusantium quisquam veniam laboriosam atque!</div>
              </div>
            </div>
          </div>
          <div className='sentimentSlider'>
            <div>
              <FaNewspaper size={28} className='rounded-full bg-sky-400 w-12 h-12 p-2' />
              <div className='w-4/5 ml-2 text-sm'>
                <div className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ab veritatis earum et harum suscipit facere voluptatibus aut libero adipisci.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio laborum a natus blanditiis? Suscipit ut sapiente, minima fuga iure quae doloribus architecto consequuntur sint perferendis nulla. Maxime fugit rem omnis, magnam, vitae quibusdam tenetur a at sequi harum esse? Autem dicta velit veritatis facere accusantium quisquam veniam laboriosam atque!</div>
              </div>
            </div>
          </div>
          <div className='sentimentSlider sseven'>
            <div>
              <BsGraphUpArrow size={28} className='rounded-full bg-green-400 w-12 h-12 p-2' />
              <div className='w-4/5 ml-2 text-sm'>
                <div className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ab veritatis earum et harum suscipit facere voluptatibus aut libero adipisci.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio laborum a natus blanditiis? Suscipit ut sapiente, minima fuga iure quae doloribus architecto consequuntur sint perferendis nulla. Maxime fugit rem omnis, magnam, vitae quibusdam tenetur a at sequi harum esse? Autem dicta velit veritatis facere accusantium quisquam veniam laboriosam atque!</div>
              </div>
            </div>

          </div>
          <div className='sentimentSlider'>
            <div>
              <FaNewspaper size={28} className='rounded-full bg-sky-400 w-12 h-12 p-2' />
              <div className='w-4/5 ml-2 text-sm'>
                <div className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ab veritatis earum et harum suscipit facere voluptatibus aut libero adipisci.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio laborum a natus blanditiis? Suscipit ut sapiente, minima fuga iure quae doloribus architecto consequuntur sint perferendis nulla. Maxime fugit rem omnis, magnam, vitae quibusdam tenetur a at sequi harum esse? Autem dicta velit veritatis facere accusantium quisquam veniam laboriosam atque!</div>
              </div>
            </div>
          </div>
        </Slider>

        <div className='flex justify-start items-center text-gray-700 font-medium text-lg mt-10'>Analyst Estimates<IoInformationCircleSharp className='ml-2' /></div>
        <div className='pt-5 flex items-center'>
          <div className='rounded-full w-1/6 aspect-square bg-green-200 flex justify-center items-center text-3xl text-green-700 font-semibold'>76%</div>
          <div className='pl-10 w-4/5'>
            <ul>
              <li className='flex items-center'>Buy<ProgressBar bgcolor="rgb(21 128 61)" progress="76" height="1vh" /></li>
              <li className='flex items-center'>Hold<ProgressBar bgcolor="rgb(168 162 158)" progress="8" height="1vh" /></li>
              <li className='flex items-center'>Sell<ProgressBar bgcolor="rgb(185 28 28)" progress="16" height="1vh" /></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sentiments