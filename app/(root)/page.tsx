import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

const Home = async ({ searchParams }: {
  searchParams: Promise<{query?: string}>
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params  });

  console.log(JSON.stringify(posts))
  // const posts = [{
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: {_id: 1, name: 'Abuki'},
  //   _id: 1,
  //   description: "This is a description",
  //   image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*9HY0dyZdTkryuRgkCiJjxQ.jpeg",
  //   category: "Robot",
  //   title: "We Robots"
  // }]
  return (
    <>
      <section className='pink_container'>
        <div className='heading'>Pitch Your Startup, <b>connect with enterpreneurs</b></div>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search result for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
           posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post}/>
           ))
          ): (
            <p className='no-results'>No startups found</p>
          )}
          
        </ul>
      </section>

      <SanityLive />
    </>
  )
}

export default Home
