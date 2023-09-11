import React from 'react'
import './uv.css';

const UV_index = () => {
  return (
    <div className='uv_card'>
          <div className='text_div mt-4'>
              <p className='font-semibold text-xs mr-10'>UV index</p>
              <div id="icon_holder">
                  <img src="sun.png" alt="" />
              </div>
          </div>

          <div className='percent '>
              <p className='font-bold text-lg text-center'>4 <span className='text-[12px] font-light'>medium</span></p>
          </div>
          <div className='levels_uv mt-1'>
              <div className='good_div_uv'>
                  <p className='text-[10px]'>0-2</p>
              </div>
              <div className='normal_div_uv'>
                  <p className='text-[10px] '>3-5</p>
              </div>
              <div className='bad_div_uv'>
                  <p className='text-[10px]'>6-7</p>
              </div>
              <div className='bad_div_uv'>
                  <p className='text-[10px] '>8-10</p>
              </div>
              <div className='bad_div_uv'>
                  <p className='text-[10px]'>11+</p>
              </div>
              
          </div>
    </div>
  )
}

export default UV_index