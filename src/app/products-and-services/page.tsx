import Image from 'next/image'
import React from 'react'

export default function ProductsAndServices() {
  return (
    <section className=''>
      <div>
        <h1>Products and Services</h1>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div></div>
        <div>
          <Image src={'/refining.svg'} alt='Refining' width={774} height={345} />
        </div>
      </div>
    </section>
  )
}
