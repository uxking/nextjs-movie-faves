import nookies from 'nookies'

export default async function handler(req, res) {
  const mycookies = nookies.get({ req })
  // console.log('mycookies', mycookies)
  // const rawCookies = req.headers.cookie && req.headers.cookie.split('; ')
  // console.log('cookies', req.headers.cookies)
  // const token =
  //   rawCookies.length && rawCookies.filter((cookie) => cookie.includes('token'))

  // const jwt = token.length && token[0].split('=')[1]
  const jwt = mycookies.token
  // console.log(jwt)

  const data = await fetch('http://develop.uxking.com:1337/movies', {
    headers: {
      method: 'GET',
      ContentType: 'application/json',
      // cookie: 'token=' + mycookies.token,
      Authorization: 'Bearer ' + jwt,
    },
    credentials: 'include',
  })

  const json = await data.json()

  res.setHeader('Content-Type', 'application/json')
  res.status(200)
  res.json(json)
}
