import React from 'react'
import SearchForm from '../../components/SearchForm'


const Home = async ({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) => {
  const query = (await searchParams).query;
  return (
    <>
      <section className='pink_container'>
        <div className='heading'>Pitch Your Startup, <b>connect with enterpreneurs</b></div>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>
    </>
  )
}

export default Home
