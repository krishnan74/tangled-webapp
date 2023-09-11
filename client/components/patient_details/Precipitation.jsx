import React from 'react'
import './prec.css'

const Precipitation = () => {
  return (
    <div className='uv_card'>
          <div className='text_div mt-4'>
              <p className='font-semibold text-xs mr-10'>Precipitation</p>
              <div id="icon_holder">
                  <img src="raincloud.png" alt="" />
              </div>
          </div>

          <div className='percent ml-3'>
              <p className='font-bold text-lg text-center'>1.4 cm</p>
          </div>
          <div className='levels_prec mt-1 ml-5'>
              <div className='good_div_prec'>
                  <p className='text-[10px] '>0</p>
              </div>
              <div className='normal_div_prec'>
                  <p className='text-[10px]     '>10</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px] '>20</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px]'>30</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px]'>40</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px] '>50</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px]'>60</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px]'>70</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px] '>80</p>
              </div>
              <div className='bad_div_prec'>
                  <p className='text-[10px]'>90</p>
              </div>
              
          </div>
    </div>
  )
}

export default Precipitation