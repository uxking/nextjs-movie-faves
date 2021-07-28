import { state } from '../utils/state'
import { useSnapshot } from 'valtio'

import LoginCard from '../components/LoginCard'
import LogoutCard from '../components/LogoutCard'

export default function Login() {
  /* check state to see if we have a user logged in */
  const snap = useSnapshot(state)
  console.log('email', snap.email)
  if (snap.email) {
    return <LogoutCard />
  }
  return <LoginCard />
}
