import { getLayout } from '../components/SiteLayout'
import { API_URL } from '../utils/urls'

const Login = () => (
  <div className='flex flex-col px-8 space-y-3 mt-4 md:px-0'>
    <h1 className='font-semibold text-2xl text-green-sheen'>Login</h1>
    <p className='text-lg text-us-independence'>
      Login with your favorite provider.
    </p>
    <a href={`${API_URL}/connect/twitter`}>Twitter</a>
  </div>
)

Login.getLayout = getLayout

export default Login
