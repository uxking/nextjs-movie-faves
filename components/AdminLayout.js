// This is an example of having a second layout for a different page if needed.
import Link from 'next/link'

const AdminLayout = ({ children }) => (
  <div className='bg-white antialiased'>
    <div>
      <div>
        <div className='max-w-xl mx-auto px-8'>
          <nav>
            <div className='py-4 flex-shrink-0 flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 fill="none" viewBox="0 0 24 24" stroke="currentColor"'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                />
              </svg>
              <Link href='/'>
                <a className='ml-8 font-medium text-gray-900'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='ml-8 font-medium text-gray-900'>About</a>
              </Link>
              <Link href='/#'>
                <a className='ml-8 font-medium text-gray-900'>
                  Now Admin Layout
                </a>
              </Link>
            </div>
            <div className='mt-2'>
              <input
                className='block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white'
                placeholder='Search...'
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className='mt-6 sm:mt-0 sm:py-12'>{children}</div>
  </div>
)

export const getLayout = (page) => <AdminLayout>{page}</AdminLayout>

export default AdminLayout
