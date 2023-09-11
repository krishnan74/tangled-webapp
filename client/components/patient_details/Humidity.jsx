import React from 'react'
import './humidity.css'
const Humidity = (props) => {
  return (
      <div className='hum_card'>
          <div className='text_div mt-4'>
              <p className='font-semibold text-xs mr-10'>{props.name}</p>
              <div id="icon_holder">
                  <img className='h-4 w-4' src="rain.png" alt="" />
              </div>
          </div>

          <div className='percent '>
              <p className='font-bold text-lg text-center'>82% <span className='text-[12px] font-light'>bad</span></p>
          </div>
          <div className='levels mt-1'>
              <div className='good_div'>
                  <p className='text-[10px]'>good</p>
              </div>
              <div className='normal_div'>
                  <p className='text-[10px] ml-2'>normal</p>
              </div>
              <div className='bad_div'>
                  <p className='text-[10px]'>bad</p>
              </div>
              
          </div>
    </div>
  )
}

export default Humidity