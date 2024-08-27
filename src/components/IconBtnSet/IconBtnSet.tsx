import React from 'react'
import { IconButton } from '@/components/Button'
import { useDarkTheme } from '@/contexts';
import { FiGithub, FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

const IconBtnSet = () => {
  const { darkMode, setDarkMode } = useDarkTheme();

  const handleOnClickMoon = () => {
    setDarkMode(prev => !prev)
  };
  
  return (
    <div className='flex justify-between gap-3'>
      <div className='hover:text-white'>
        <IconButton onClick={handleOnClickMoon} 
        icon={darkMode ? 
          <FiSun color='#b3b3b3'/> : 
          <FaMoon color='#b3b3b3'/>}/>
      </div>
      <div>
        <IconButton
        href='https://www.linkedin.com/in/howard-cui-cs/'
        onClick={() => {}}
        icon={<RiLinkedinFill color='#b3b3b3'/>}/>
      </div>
      <div>
        <IconButton 
        href='https://github.com/Howard-Cui'
        onClick={() => {}}
        // eslint-disable-next-line react/jsx-no-undef
        icon={<FiGithub color='#b3b3b3'/>}/>
      </div>
    </div>
  )
}

export default IconBtnSet