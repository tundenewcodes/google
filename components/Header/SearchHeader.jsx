import {
  MicrophoneIcon,
  SearchIcon,
  XIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
import url from './url'

const SearchHeader = () => {
  const router = useRouter()
  const searchInputRef = useRef()

  const searchTerm = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    if (!term) console.log(term)
    router.push(`/Search?term=${term}`)
  }
  const avatarUrl =
    'https://images.unsplash.com/photo-1658239827341-b6c8be3e6ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

  return (
    <header className='sticky top-0 bg-white z-10 '>
      <div className='flex  p-6 w-full'>
        <Image
          src={url}
          alt='logo'
          className='cursor-pointer'
          onClick={() => router.push('/')}
          height={40}
          width={120}
        />{' '}
        <form
          onSubmit={searchTerm}
          className='flex  flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl  ml-10 mr-5 px-6 py-3'>
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow  w-full focus:outline-none'
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className='h-7    transition duration-100 transform hover:scale-125 cursor-pointer sm:mr-3'
          />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex mr-3 border-l-2 border-gray-300 text-blue-500  pl-4' />
          <SearchIcon className='h-6 text-blue-500  hidden sm:inline-flex ' />
          <button hidden type='button' onClick={searchTerm}>
            search{' '}
          </button>{' '}
        </form>{' '}
        <Avatar className='ml-auto' url={avatarUrl} />{' '}
      </div>{' '}
      <HeaderOptions />
    </header>
  )
}

export default SearchHeader
