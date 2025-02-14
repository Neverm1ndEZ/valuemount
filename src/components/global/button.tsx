import React from 'react'

interface ButtonsProps {
    children: string
}

const CustomButton: React.FC<ButtonsProps> = ({ children }) => {
  return (
    <button className='bg-[#AD8330] px-5 text-white text-lg font-semibold h-12 rounded-xl'>{children}</button>
  )
}

export default CustomButton