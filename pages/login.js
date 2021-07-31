import nookies from 'nookies'
import LoginCard from '../components/LoginCard'
import LogoutCard from '../components/LogoutCard'

export default function Login({ cookies }) {
  /* check state to see if we have a user logged in */

  if (cookies.emailAddress) {
    return <LogoutCard />
  }
  return <LoginCard />
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
