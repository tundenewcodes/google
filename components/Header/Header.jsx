import Avatar from './Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

const Header = () => {
  const url =
    'https://images.unsplash.com/photo-1658239827341-b6c8be3e6ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  return (
    <header className='w-full p-5 flex justify-between  text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
        <p className='hover:underline cursor-pointer'> about </p>{' '}
        <p className='hover:underline cursor-pointer'> store </p>{' '}
      </div>{' '}
      <div className='flex space-x-4 items-center'>
        <p className='hover:underline cursor-pointer'> gmail </p>{' '}
        <p className='hover:underline cursor-pointer'> images </p>{' '}
        <ViewGridIcon className='rounded-full  cursor-pointer h-10 w-10 p-2 hover:bg-gray-100' />
        <Avatar url={url} />{' '}
      </div>{' '}
    </header>
  )
}

export default Header
