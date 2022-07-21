import React from 'react'
import HeaderOption from '../HeaderOption'
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const HeaderOptions = () => {
  return (
    <div  className='flex w-full justify-evenly text-gray-700  text-sm lg:text-base  lg:justify-start  lg:space-x-36 lg:pl-52 border-b-[1px]'>
      <div className='flex space-x-6 items-center'>
        <HeaderOption  Icon={SearchIcon}  title='All' selected />
        <HeaderOption  Icon={PhotographIcon}  title='Images'  />
        <HeaderOption  Icon={PlayIcon}  title='Videos'  />
        <HeaderOption  Icon={NewspaperIcon}  title='News'  />
        <HeaderOption  Icon={MapIcon}  title='Maps'  />
        <HeaderOption  Icon={DotsVerticalIcon}  title='More'  />
      </div>

      <div className='flex space-x-4 items-center'>
        <p className='hover:underline cursor-pointer'>settings</p>
        <p className='hover:underline cursor-pointer'>tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
