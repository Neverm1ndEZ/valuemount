import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
  return (
    <section className='mx-auto max-w-7xl space-y-10 overflow-y-clip p-4'>
      <div className='mx-auto max-w-5xl'>
        <div className='p-5 bg-white/40 border-[#0a0d1733] flex items-center justify-center w-full gap-7'>
        <div className='p-10 flex flex-col items-center justify-center w-full space-y-10'>
          <div>
            <h1 className='text-[#AD8330] text-2xl font-bold'>Let&apos;s Refine Your Gold Together</h1>
            <h2 className='text-[#1B1B1B] text-sm font-meta'>Fill out this form and our team will get back to you promptly.</h2>
          </div>
          <form className='space-y-3.5 w-full'>
            <div className='flex items-center justify-center w-full gap-3.5'>
              <div>
                <input type='text' placeholder="Last Name" className='p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm placeholder:font-meta' />
              </div>
              <div>
                <input type='text' placeholder="First Name" className='p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm placeholder:font-meta' />
              </div>
            </div>
            <div className='w-full'>
              <input type='email' placeholder="Email" className='w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm placeholder:font-meta' />
            </div>
            <div className='w-full'>
              <input type='tel' placeholder="Phone Number" className='w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm placeholder:font-meta' />
            </div>
            <div className='w-full'>
              <input type='text' placeholder="Message" className='w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:font-bold placeholder:text-sm placeholder:font-meta' />
            </div>
            <div className='w-full'>
              <button className='inline-flex items-center justify-center w-full bg-[#AD8330] rounded-md py-3 px-2.5 h-10 font-semibold text-lg text-center text-white'>Send to Refine</button>
            </div>
          </form>
        </div>
        <div className='w-full'>
          <Image src={'/contactForm.svg'} alt='Contact Image' width={488} height={536} />
        </div>
        </div>
      </div>
    </section>
  )
}
