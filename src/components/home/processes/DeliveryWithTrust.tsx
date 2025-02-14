import Image from 'next/image'
import React from 'react'
import CustomButton from '../global/button'
import Pagination from '../global/Pagination'

export default function DeliveryWithTrust() {
  return (
    <section className=''>
      <div className='flex justify-between items-center w-full'>
        <div>
          <h1 className='text-[#AD8330] text-5xl font-bold'>Our Processes</h1>
        </div>
        <div>
          <Image src={'/five.gif'} alt={'page number'} width={250} height={250} unoptimized  />
        </div>
      </div>
      <div className='flex items-start justify-between w-full gap-x-6'>
        <div className=''>
          <Image src={'/dwt.svg'} alt='Delivery with Trust' width={480} height={510} />
        </div>
        <div className='grid justify-between h-full pt-4'>
          <div className='space-y-4'>
            <h1 className='text-[#AD8330] text-4xl font-bold'>Delivery with Trust</h1>
            <h2 className='text-xl text-[#000] font-bold'>Secure and timely delivery guaranteed.</h2>
            <p className='font-meta text-base max-w-[500px]'>
            We ensure that your refined gold reaches you safely and on time, with full transparency at every step. Trust and reliability are at the core of our delivery process, reinforcing our commitment to excellence.
            </p>
            <div>
              <CustomButton>Explore More</CustomButton>
            </div>
          </div>
          <div className='mt-40'>
            <Pagination page={'05'} />
          </div>
        </div>
      </div>
    </section>
  )
}
