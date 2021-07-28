// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nookies from 'nookies'
import { state } from '../../utils/state'

export default function handler(req, res) {
  /* delete the server side cookies by using nookies.set()  */
  nookies.set({ res }, 'token', 'deleted', {
    maxAge: 0,

    path: '/',
  })
  /* delete the client side emailAddress cookie */
  nookies.set({ res }, 'emailAddress', 'deleted', {
    maxAge: 0,

    path: '/',
  })

  /* set state to logged out */
  state.isLoggedIn = false

  res.redirect('/')
}
