import { getLayout } from '../components/SiteLayout'

const Home = () => (
  <div className='flex flex-col px-8 space-y-3 mt-4 md:px-0'>
    <h1 className='font-semibold text-2xl text-green-sheen'>Home</h1>
    <p className='text-lg text-us-independence'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
)

Home.getLayout = getLayout

export default Home
