import nookies, { setCookie } from 'nookies'
import { state } from '../../utils/state'

export default function handler(req, res) {
  nookies.set({ res }, 'token', req.query.token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    httpOnly: true,
  })
  /* lets set a client side cookie for emailAddress */
  nookies.set({ res }, 'emailAddress', req.query.emailAddress, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    httpOnly: true,
  })
  /* set login flag to true */
  state.isLoggedIn = true

  res.redirect('/')
}
