import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'

const Footer = () => {
  return (
    <footer className='grid  w-full  divide-y-[1px] divide-gray-300 bg-gray-100  text-sm text-gray-500   '>
      <div>
        <p className='px-8 py-3'>united kingdom</p>
      </div>
      <div className='grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3  grid-flow-row-dense gap-y-4'>
        <div  className='flex justify-center items-center  md:col-span-2 lg:col-span-1  lg:col-start-2'>
          <GlobeIcon className='h-5  mr-1 text-gray-700' /> Carbon
          neutral since 2007
        </div>
      </div>

      <div className='flex  justify-center space-x-8 whitespace-nowrap  md:justify-self-start'>
        <p>advertising</p>
        <p>business</p>
        <p> how search works</p>
      </div>
      <div className='flex  justify-center space-x-8 whitespace-nowrap  md:ml-auto'>
        <p>privacy</p>
        <p>terms</p>
        <p>settings</p>
      </div>
    </footer>
  )
}

export default Footer
