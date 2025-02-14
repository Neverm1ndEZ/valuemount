import Image from 'next/image'
import React from 'react'

interface CardProps {
  heading: string
  icon: string
  description: string
}

const Card: React.FC<CardProps> = ({ heading, icon, description }) => {
  return (
    <div className='bg-[url(/Texture.svg)] bg-cover max-w-[335px] bg-[#d8d8d8] rounded-xl px-8 pt-6 pb-12 space-y-9'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-[#AD8330] text-2xl font-bold font-main'>{heading}</h1>
        <Image src={icon} alt='icon' width={50} height={50} />
      </div>
      <div>
        <p className='text-[#1B1B1B] font-meta text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Card
