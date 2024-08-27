import React from 'react'
import { Navigators } from '../Navbar'
import { IconBtnSet } from '../IconBtnSet'

const Footer = () => {
  return (
    <footer className='min-h-[400px] flex flex-col justify-between items-center 
    py-4 box-border'>
      <div className='absolute left-0 w-[100%] min-h-[430px] dark:bg-[#3667a72f] 
      bg-[#1758c215] '/>

      <div className='min-h-[400px] flex flex-col justify-evenly z-[1000]'>
        <div className='flex justify-center'>
          <div className='w-[350px]'>
            <IconBtnSet/>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col items-center gap-2 w-[100%] justify-between'>
          <Navigators/>
        </div>
      </div>
      <div className='text-[13px] w-[300px] flex justify-center z-[800]'>
        @Copyright 2024 Howard Cui
      </div>
    </footer>
  )
}

export default Footer