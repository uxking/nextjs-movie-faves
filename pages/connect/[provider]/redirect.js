import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../utils/urls'

const Redirects = () => {
  const [text, setText] = useState('loading...')

  // const [text, setText] = useState(message)
  // const router = useRouter()

  // useEffect(async () => {
  //   if (!router.isReady) return

  //   const res = await fetch(
  //     `${API_URL}/auth/${router.query.provider}/callback?access_token=${router.query.access_token}&access_secret=${router.query.access_secret}`
  //   )
  //   const data = await res.json()
  //   console.log(data)

  //   setText('You are now logged in. Your data is: ', data)
  // }, [router.isReady])
  useEffect(() => {
    setText('you are now logged in')
  }, [])

  return <p>{text}</p>
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${API_URL}/auth/${context.query.provider}/callback?access_token=${context.query.access_token}&access_secret=${context.query.access_secret}`
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Redirects
