import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import SearchHeader from '../components/Header/SearchHeader'
import SearchResults from '../components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response'


const Search = ({data, query}) => {
  console.log(data)
  console.log(query)
  const router = useRouter()
   return (
    <div>
      {' '}
      <Head>
        <title> {router.query.term } - Google Search</title>{' '}
        <meta
          name='cloning google with nextjs'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>{' '}
      <SearchHeader />
      <SearchResults results={data}/>
    </div>
  )
}

export default Search



 export const   getServerSideProps = async (context) =>{

const query = context.query.term
const  startIndex  =   context.query.start || '0'

const res =  await fetch(
  `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex}`
)

const  data  = await  res.json()


return{
  props:{
    data:data,
    query:query
  }
}
 }