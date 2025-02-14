import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const navItems = [
    { label: "About Us", href: '/about-us' },
    { label: "Products & Services", href: '/products-and-services' },
    { label: "Sustainability", href: '/sustainability' },
    { label: "News & Insights", href: '/news-and-insights' }
  ]

  return (
    <div className='px-10 py-3 flex items-center justify-between border-b border-[#AD8330]'>
      <div>
        <Link href="/">
          <Image src={'/logo.svg'} alt='ValueMount' width={62} height={56} />
        </Link>
      </div>
      <nav className='flex items-center justify-around gap-x-9'>
        <ul className='flex items-center gap-x-9'>
          {navItems.map((nav, index) => (
            <li key={index} className='text-lg font-semibold cursor-pointer'>
              <Link href={nav.href}>{nav.label}</Link>
            </li>
          ))}
        </ul>
        <Link href='/contact-us'>
          <button className='px-8 py-3 rounded-full bg-white text-lg text-black font-semibold shadow-[0_4px_20px_0_#AD8330]'>
            Contact Us
          </button>
        </Link>
      </nav>
    </div>
  )
}
