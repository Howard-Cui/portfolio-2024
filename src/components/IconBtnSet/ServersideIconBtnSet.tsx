import React from 'react'
import { IconButton, ServersideIconButton } from '@/components/Button'
import { useDarkTheme } from '@/contexts';
import { FiGithub, FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const IconBtnSet = () => {

  
  return (
    <div className='flex justify-between gap-3'>
      <div className='hover:text-white'>
        <ServersideIconButton
          icon={<FiSun color='#b3b3b3'/>}
        />
      </div>
      <div>
        <ServersideIconButton
          href='https://www.linkedin.com/in/howard-cui-cs/'
          icon={<RiLinkedinFill color='#b3b3b3'/>}
        />
      </div>
      <div>
        <ServersideIconButton
          href='https://github.com/Howard-Cui'
          icon={<FiGithub color='#b3b3b3'/>}
        />
      </div>
    </div>
  )
}

export default IconBtnSet