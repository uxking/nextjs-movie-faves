import Link from 'next/link'
import { useState } from 'react'

const handlMenu = () => {
  setMenu(!isMenuVisible)
}
const SiteLayout = ({ children }) => (
  const [isMenuVisible, setMenu] = useState(false)
  <div className='bg-egg-shell antialiased'>
    <header className='flex flex-wrap justify-between bg-deep-champaign py-6 px-12 relative md:items-center md:space-x-4'>
      <div className='flex items-center align-middle space-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-terra-cotta'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
          />
        </svg>
        <span className='font-semibold text-2xl text-terra-cotta'>Hi</span>
      </div>
      <button className='inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1'>
        <svg
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <nav
        className='absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-deep-champaign shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent px-12 py-6 pt-0 md:p-1 align-center'
        className={`${isMenuVisible} ? 'hidden' : 'flex'`}
      >
        <Link href='/'>
          <a className='block py-1 text-terra-cotta hover:underline'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='block py-1 text-terra-cotta hover:underline'>About</a>
        </Link>
        <Link href='/login'>
          <a className='block py-1 text-terra-cotta md:text-egg-shell md:bg-green-sheen md:rounded-md md:hover:shadow-md md:px-2'>
            Login
          </a>
        </Link>
      </nav>
    </header>
    <main className='bg-egg-shell h-screen max-h-full md:mx-12'>
      {children}
    </main>
  </div>
)

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
