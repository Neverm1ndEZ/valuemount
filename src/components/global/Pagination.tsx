import React from 'react'

interface PaginationProps {
  page: string
}

export default function Pagination({ page }: PaginationProps) {
  return (
    <div className='flex items-center justify-end w-full gap-2'>
      <p className='text-[#A16A59] text-sm font-semibold'>{page}</p>
      <div className='w-[130px] h-0.5 bg-black' />
      <p className='text-[#000] text-sm font-semibold'>05</p>
    </div>
  )
}
