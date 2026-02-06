
import { Badge } from './ui/badge'
import React from 'react'

function LatestJobCard() {
  return (
    <div className='p-5 rounded-md bg-white border border-gray-100 cursor-pointer shadow-xl '>
      <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold my-2 text-lg'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className='text-blue-700 font-bold' variant="ghost"> 12 Positions</Badge>
        <Badge className='text-[#f83802] font-bold' variant="ghost">Part Time</Badge>
        <Badge className='text-[#7209b7] font-bold' variant="ghost">24 LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCard
