import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../utils/urls'

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
      console.log(data)
      setText(
        `You are now logged in ${data.user.email}. You will be redirected in a few seconds...`
      )
      /* Once logged in, send user to the another page */
      setTimeout(() => router.push('/'), 3000)
    }

    /* once we reneded the page the router will be ready and we can then router.query, otherwise return */
    if (!router.isReady) return

    /* call the getData function */
    getData()
  }, [router.isReady])

  return <p>{text}</p>
}
