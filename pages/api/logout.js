// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nookies from 'nookies'

export default function handler(req, res) {
  /* delete the server side cookie by using nookies.set()  */
  nookies.set({ res }, 'token', 'deleted', {
    maxAge: 0,

    path: '/',
  })

  res.redirect('/')
}
