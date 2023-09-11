import React from 'react'

const Rain_chance = () => {
  return (
    <div className='hum_card'>
          <div className='text_div mt-4'>
              <p className='font-semibold text-xs mr-10'>Chance of rain</p>
              <div id="icon_holder">
                  <img className='h-4 w-4' src="umbrella.png" alt="" />
              </div>
          </div>

          <div className='percent '>
              <p className='font-bold text-lg text-center'>42%</p>
          </div>
          <div className='levels_temp mt-1'>
              
              <div className='normal_div_temp ml-7'>
                  <p className='text-[10px] ml-0'>0%</p>
                  <p className='text-[10px] ml-4'>25%</p>
                  <p className='text-[10px] ml-4'>50%</p>
                  <p className='text-[10px] ml-4'>75%</p>
                  <p className='text-[10px] ml-4'>100%</p>
              </div>
              
              
          </div>
    </div>
  )
}

export default Rain_chance