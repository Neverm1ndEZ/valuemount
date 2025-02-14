import Image from 'next/image'
import React from 'react'
import ContactCard from '../global/ContactCard'

export default function ContactHero() {

  const cardDetails = [
    {
      id: 1,
      icon: '/call.svg',
      heading: 'Call',
      details: '+91 0987654321'
    },
    {
      id: 2,
      icon: '/mail.svg',
      heading: 'Email',
      details: 'valuemount@gmail.com'
    },
    {
      id: 3,
      icon: '/linkedin.svg',
      heading: 'Linkedin',
      details: '@valuemount'
    },
  ]

  return (
    <section className=''>
      <div className='mx-auto max-w-5xl '>
        <div className='mb-10'>
          <Image src={'/contact.svg'} alt='Contact Banner' width={1024} height={460} />
        </div>
        <div className='flex items-center justify-stretch gap-3 w-full mb-10'>
          {
            cardDetails.map((details) => (
              <div className='w-[340px]' key={details.id}>
                <ContactCard icon={details.icon} heading={details.heading} details={details.details} />
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <Image src={'/location.svg'} alt='location icon' width={56} height={56} />
            </div>
            <div className='space-y-1'>
              <h1 className='font-bold text-lg text-[#1B1B1B]'>Location</h1>
              <p className='text-[#696969] text-lg font-semibold'>336 Olin Estates, Sheldontown, KS 78508-7791</p>
            </div>
          </div>
          <div>
            <button className='bg-[#AD8330] rounded-xl px-5 h-10 font-semibold text-lg text-center text-white'>Get Address</button>
          </div>
        </div>
      </div>
    </section>
  )
}
