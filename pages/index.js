import nookies from 'nookies'
import { state } from '../utils/state'
import LoginWelcome from '../components/LoginWelcome'
import useSWR from 'swr'

export default function Home({ cookies }) {
  // /* set the isLoggedIn flag in state */
  state.isLoggedIn = cookies.emailAddress || false

  if (!state.isLoggedIn) {
    return <LoginWelcome />
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('/api/movies', fetcher)

  if (error) return <div>failed to load</div>
  if (!data)
    return <div className='text-lg font-semibold mt-4 px-8'>loading...</div>

  // render data
  return (
    <div className='flex flex-col px-8 space-y-3 mt-4'>
      <h1 className='font-semibold text-2xl'>Movie Favorites</h1>
      <div className='text-lg text-us-independence'>
        <p className='font-bold'>
          Welcome to Movie Favorites {cookies.emailAddress}
        </p>
        {data.map((movie) => (
          <div className='font-semibold' key={movie.id}>
            {movie.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)

  /* send the cookie to the page as props so we can use the
  email address */
  return {
    props: {
      cookies,
    },
  }
}
