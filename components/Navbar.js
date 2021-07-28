import Link from 'next/link'
import { useState } from 'react'
import { state } from '../utils/state'
import { useSnapshot } from 'valtio'

export default function Navbar() {
  /* get state from valtio proxy to check for a logged in user
  so we can change the login button to say logout */
  const snap = useSnapshot(state)
  let buttonText = !snap.isLoggedIn ? 'Login' : 'Logout'

  const [isOpen, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header className='bg-sput-deep-brown sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 text-white'>
      <div className='flex items-center justify-between px-4 py-3 sm:p-0'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-current w-12 h-12'
          >
            <path d='M23.322 19.318l-4.072 1.192-1.193-4.072 1.763.964c.737-1.305 1.18-2.798 1.18-4.402 0-3.681-2.224-6.849-5.396-8.242l.623-1.914c3.975 1.657 6.772 5.579 6.772 10.156 0 1.953-.521 3.779-1.416 5.367l1.739.951zm-11.323 2.682c-3.332 0-6.24-1.825-7.796-4.523l1.769-1.026-4.102-1.089-1.089 4.1 1.694-.982c1.899 3.295 5.447 5.52 9.524 5.52 2.202 0 4.248-.654 5.969-1.768l-1.24-1.588c-1.376.854-2.994 1.356-4.729 1.356zm-8.994-8.876l-.006-.124c0-4.625 3.51-8.433 8.004-8.932l-.004 1.932 3.005-2.996-2.995-3.004-.003 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.985-.278zm6.126-.564c-.251.862-.146 1.768.415 2.571.904-1.333 2.588-2.767 3.76-3.039-2.395 1.731-3.735 4.16-3.909 6.908h1.011c-.023-1.038.125-2.345.497-2.934.911.302 1.924.125 2.797-.613 1.724-1.463 1.077-5.14 4.112-5.564-4.07-2.224-7.943.124-8.683 2.671z' />
          </svg>
        </div>
        <div className='sm:hidden'>
          <button
            onClick={handleMenu}
            type='button'
            className='block text-sput-red hover:text-sput-pink focus:text-sput-red focus:outline-none'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path
                className={`${isOpen ? 'block' : 'hidden'}`}
                fillRule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
              <path
                className={`${!isOpen ? 'block' : 'hidden'}`}
                fillRule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <Link href='/'>
          <a className='block px-2 py-1 font-semibold rounded hover:bg-sput-pink'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a className='block px-2 py-1 font-semibold rounded hover:bg-sput-pink'>
            About
          </a>
        </Link>
        <Link href='/login'>
          <a className='block px-2 py-1 sm:ml-3 font-semibold rounded hover:bg-sput-pink sm:text-sput-white sm:text-opacity-75 sm:hover:opacity-100 sm:hover:bg-sput-black sm:hover:border-opacity-100 sm:opacity-75 sm:border-2 sm:border-sput-white'>
            {buttonText}
          </a>
        </Link>
      </nav>
    </header>
  )
}
