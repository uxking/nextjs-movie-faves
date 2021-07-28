import nookies from 'nookies'
import { state } from '../utils/state'
import LoginWelcome from '../components/LoginWelcome'

export default function Home({ cookies }) {
  /* set the isLoggedIn flag in state */
  state.isLoggedIn = cookies.emailAddress || false
  /* show message based on isLoggedIn flag */
  const message = state.isLoggedIn
    ? `Welcome ${cookies.emailAddress}`
    : 'Sorry, you are not logged in...'

  if (!state.isLoggedIn) {
    return <LoginWelcome />
  }

  return (
    <div className='flex flex-col px-4 space-y-3 mt-4'>
      <h1 className='font-semibold text-2xl'>Home</h1>
      <div className='text-lg text-us-independence'>
        <div className='text-red-300'>{message}</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)

  /* set server side cookie if we have a token */
  if (!cookies.token && ctx.query.token) {
    nookies.set(ctx, 'token', ctx.query.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
      httpOnly: true,
    })
  }
  /* send the cookie to the page as props so we can use the token and any other cookies we may have set client side */
  return {
    props: { cookies },
  }
}
