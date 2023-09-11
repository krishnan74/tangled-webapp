import React from 'react'
import './temp.css'
const Temperature = () => {
  return (
    <div className='hum_card'>
          <div className='text_div mt-4'>
              <p className='font-semibold text-xs mr-10'>Feels like</p>
              <div id="icon_holder">
                  <img className='h-4 w-4' src="temp.png" alt="" />
              </div>
          </div>

          <div className='percent'>
              <p className='font-bold text-lg text-center'>30<sup>&deg;</sup></p>
          </div>
          <div className='levels_temp mt-1'>
              
              <div className='normal_div_temp ml-7'>
                  <p className='text-[10px] ml-2'>0<sup>&deg;</sup></p>
                  <p className='text-[10px] ml-14'>25<sup>&deg;</sup></p>
                  <p className='text-[10px] ml-14'>50<sup>&deg;</sup></p>
              </div>
              
              
          </div>
    </div>
  )
}

export default Temperature