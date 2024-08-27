import React, { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { IconButton } from '@/components/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { useDropDownNav } from '@/contexts';
import { IoClose } from "react-icons/io5";
import SideMenu from './SideMenu';
import dynamic from 'next/dynamic.js';
import { ServersideIconBtnSet } from '../IconBtnSet';


const IconBtnSet = dynamic(() => import("../IconBtnSet").then(mod => mod.IconBtnSet), {
  ssr: false,
  loading: () => <ServersideIconBtnSet/>
})

const navList = [
    { title: "Home", route: '#' },
    { title: "Blog", route: '#' },
    { title: "About", route: '#' },
    { title: "Contact Me", route: '#' },
  ]

export const Navigators = () => navList.map(item => {
  return (
    <div
    className='hover:text-high-light hover:border-high-light-second
    border-b-[2px] border-b-[transparent] z-[1000] list-none font-[500]
    active:scale-[90%]'
    key={item.title}>
      <Link href={item.route}>{item.title}</Link>
    </div>
  )
})

const Navbar = () => {
  const { openNav, setOpenNav } = useDropDownNav();
  const needBurgurMenu = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const handleOnClickBurger = () => setOpenNav(!openNav);

  return (
    <nav className='setted-width h-[70px] flex justify-between items-center mt-9'>
        <h1 className='font-bold text-[25px]  first-letter:text-high-light-second'>
          Howard Cui
        </h1>

        {
          needBurgurMenu ? 
          <IconButton 
            className="z-[1000000]"
            icon={!openNav ? 
              <GiHamburgerMenu size={"large"}/> 
              : <IoClose size={"large"}/>} 
            onClick={handleOnClickBurger}
          />
          : (
          <>
            <div className='flex justify-between gap-8 font-[500]'>
              {
                <Navigators/>
              }
              <IconBtnSet/>

            </div>
          </>)
        }
        
        {openNav && needBurgurMenu && (
          <SideMenu Navigators={<Navigators/>}/>
        )}
      </nav>
  )
}

export default Navbar