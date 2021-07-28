import { parseCookies } from 'nookies'
import LoginCard from '../components/LoginCard'
import LogoutCard from '../components/LogoutCard'

export default function Login() {
  /* check state to see if we have a user logged in */

  const cookies = parseCookies()

  if (cookies.emailAddress) {
    return <LogoutCard />
  }
  return <LoginCard />
}
