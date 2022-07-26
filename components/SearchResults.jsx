import React from 'react'
import PaginationButtons from './PaginationButtons'

const SearchResults = ({results}) => {
  return (
    <div   className='mx-auto w-full  px-3  sm:pl-[5%] md:pl-[14%]   lg:pl-52'>
        <p  className='text-gray-600 text-md b-5 mt-3'>{results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime}seconds)</p>
     {results.items?.map(item =>(
      <div  key={item.link}   className='max-w-xl mb-8'>
      <div  className='group'>
        <a href={item.link} className='text-sml'>{item.formattedUrl}</a>
        <a href={item.link}>
          <h2  className='truncate  text-xl text-blue-800  group-hover:underline  font-medium'>{item.title}</h2>
        </a>
      </div>
      <p   className='line-clamp-2'>{item.snippet}</p>
      </div>
     ))}
     <PaginationButtons/>
    </div>
  )
}

export default SearchResults