import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../utils/urls'
import { state } from '../../../utils/state'
import { setCookie } from 'nookies'

export default function Redirects() {
  const [text, setText] = useState('loading...')

  const router = useRouter()

  useEffect(() => {
    /* Create a function to fetch the data async */
    async function getData() {
      const res = await fetch(
        `${API_URL}/auth/${router.query.provider}/callback?access_token=${router.query.access_token}&access_secret=${router.query.access_secret}`
      )

      const data = await res.json()
      console.log('data', data)

      /* lets set a client side cookie for emailAddress */
      setCookie(null, 'emailAddress', data.user.email, {
        maxAge: 3600,
        path: '/',
      })
      state.isLoggedIn = true

      setText(
        `You are now logged in as ${data.user.email}. You will be redirected in a few seconds...`
      )

      /* Once logged in, send user to the home page along with the token */
      setTimeout(
        () =>
          router.push({
            pathname: '/',
            query: {
              token: data.jwt,
            },
          }),
        3000
      )
    }

    /* once we reneded the page the router will be ready and we can then router.query, otherwise return */
    if (!router.isReady) return

    /* call the getData function */
    getData()
  }, [router.isReady])

  return <p className='mx-6 font-medium text-lg'>{text}</p>
}
