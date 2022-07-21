import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import url from './Header/url'

const Page = () => {
  const searchRef = useRef(null)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()

    const term = searchRef.current.value
    if (!term) {
      return alert('please enter search term')
    }

    router.push(`/Search?term=${term}`)
  }

  return (
    <form
      onSubmit={search}
      className='flex flex-col items-center  justify-center flex-grow  w-4/5'>
      <Image src={url} alt='image' height={100} width={300} />{' '}
      <div className='flex mt-3 hover:shadow-lg w-full  focus-within:shadow-lg  max-w-md  rounded-full border border-gray-300 px-5 py-3 items-center   sm:max-w-xl    lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3  text-gray-500' />
        <input
          type='text'
          ref={searchRef}
          className='focus:outline-none   flex-grow'
        />
        <MicrophoneIcon className='h-5' />
      </div>{' '}
      <div className='flex space-y-2 flex-col w-1/2  justify-center  sm:space-y-0   sm:flex-row  mt-8  sm:space-x-4'>
        <button
          onClick={search}
          className='bg-[#f8f9fa] p-3  space-x-4 rounded-md ring-gray-200 text-sm  text-gray-800 hover:ring-1  focus-outline-none  active:ring-gray-300  hover:shadow-md'>
          Google Search{' '}
        </button>{' '}
        <button
          onClick={search}
          className='bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm  text-gray-800 hover:ring-1  focus-outline-none  space-x-4  active:ring-gray-300  hover:shadow-md'>
          I am feeling Lucky{' '}
        </button>{' '}
      </div>{' '}
    </form>
  )
}

export default Page
