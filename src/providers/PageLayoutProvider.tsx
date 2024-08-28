"use client"

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { DarkThemeProvider, DropDownNavProvider } from '@/contexts';
import React, { useEffect, useState } from 'react'

interface PageLayoutProviderProps {
  children: React.ReactNode
}

const PageLayoutProvider = ({
  children
}: PageLayoutProviderProps) => {
  const [ navColorChanged, setNavColorChanged ] = useState(false);

  useEffect(() => {
    const scrollNavHandler = () => {
      if (window.scrollY >= 70) {
        setNavColorChanged(true);
        // alert("1")
      } else {
        setNavColorChanged(false);
      }
    }
    window.addEventListener("scroll", scrollNavHandler);

    return () => {
      window.removeEventListener("scroll", scrollNavHandler);
    }
  },[])

  return (
    <div className='flex flex-col gap-6 text-[20px] w-full'>
      <div className={`flex justify-center fixed left-0 top-0 w-[100vw] 
      dark:bg-bg-dark bg-bg-light ${navColorChanged ? "opacity-95" : ""} z-[10000]`}>
        <Navbar/>
      </div>
      <div className='h-[70px]'/>
        { children }
      <Footer/>
    </div>
  )
}

const WrappedPageLayoutProvider = ({
  children
}: PageLayoutProviderProps) => {
  return (
    <DropDownNavProvider>
      <DarkThemeProvider>
        <PageLayoutProvider>
          { children }
        </PageLayoutProvider>
      </DarkThemeProvider>
    </DropDownNavProvider>
  )
}

export default WrappedPageLayoutProvider 