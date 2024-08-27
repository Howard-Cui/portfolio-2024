import React, { useEffect, useState } from 'react'

interface IconButtonProps {
  icon: React.ReactNode;
  className?: string;
  href?: string
}

const IconButton = ({
  icon,
  className,
  href
}: IconButtonProps) => {


  return (
    <button
      className={`w-[30px] h-[30px] flex justify-center active:scale-[95%]
      items-center rounded-md hover:bg-[#635e5e] hover:opacity-75 ${className}`}
    >
      {icon}
    </button>
  )
}

export default IconButton
