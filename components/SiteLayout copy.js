import Link from 'next/link'

const SiteLayout = ({ children }) => (
  <div className='bg-egg-shell antialiased'>
    <div>
      <div>
        <div className='md:mx-24 px-4 flex items-center align-middle justify-between'>
          <nav>
            <div className='py-4 px-4 flex flex-col sm:flex-row items-center'>
              <div className='flex flex-shrink-0 items-center space-x-2 mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 sm:h-10 sm:w-10 text-terra-cotta'
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
                <span className='font-medium text-xs sm:text-lg text-terra-cotta'>
                  I heart flix
                </span>
              </div>

              <Link href='/'>
                <a className='text-xs sm:text-lg ml-8 font-medium text-terra-cotta hover:text-us-independence'>
                  Home
                </a>
              </Link>
              <Link href='/about'>
                <a className='text-xs sm:text-lg ml-8 font-medium text-terra-cotta hover:text-us-independence'>
                  About
                </a>
              </Link>
            </div>
          </nav>
          <div className='flex items-center w-32 sm:w-auto sm:ml-24'>
            <input
              className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
              placeholder='Search...'
            />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-egg-shell h-screen max-h-full'>{children}</div>
  </div>
)

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
