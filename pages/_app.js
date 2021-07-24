import '../styles/globals.css'
//import SiteLayout from '../components/SiteLayout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
