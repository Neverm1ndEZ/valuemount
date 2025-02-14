import Image from 'next/image'
import React from 'react'

interface ContactCardProps {
  icon: string
  heading: string
  details: string
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, heading, details }) => {
  return (
    <div className='p-4 border-[1px] border-[#AD8330] space-y-3 rounded-lg'>
      <Image src={icon} alt='Call Icon' width={28} height={28} />
      <div className='space-y-1'>
        <h1 className='font-bold text-xl text-[#1B1B1B]'>{heading}</h1>
        <h2 className='font-semibold text-lg text-[#696969]'>{details}</h2>
      </div>
    </div>
  )
}

export default ContactCard
