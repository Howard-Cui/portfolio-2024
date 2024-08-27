import React, { useEffect, useState } from 'react'

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
  href?: string
}

const IconButton = ({
  icon,
  className,
  onClick,
  href
}: IconButtonProps) => {
  const [ loadDom, setLoadDom ] = useState(false);

  useEffect(() => {
    setLoadDom(true);
  }, [])

  return (
    <>
    {loadDom && (<a href={href}>
      <button 
      onClick={onClick}
      className={`w-[30px] h-[30px] flex justify-center active:scale-[95%]
      items-center rounded-md hover:bg-[#635e5e] hover:opacity-75 ${className}`}>
        {icon}
      </button>
    </a>)}
    </>
  )
}

export default IconButton
