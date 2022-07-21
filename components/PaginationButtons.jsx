import {ChevronLeftIcon, ChevronRightIcon}  from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'


const PaginationButtons = () => {
    const router = useRouter()
    const  startIndex = Number(router.query.start)  || 0
  return (
    <div    className='flex max-w-xl  justify-between text-blue-700   mb-10'>
      {startIndex >= 10 && (
        <Link
          href={`/Search?term=${router.query.term}&start=${
            startIndex - 10
          }`}>
          <div className='flex  items-center  flex-grow flex-col cursor-pointer  hover-underline'>
            <ChevronLeftIcon className='h-6' />
            <p>previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/Search?term=${router.query.term}&start=${
          startIndex + 10
        }`}>
        <div className='flex  items-center  flex-grow flex-col cursor-pointer  hover-underline'>
          <ChevronRightIcon  className='h-6' />
          <p>next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons