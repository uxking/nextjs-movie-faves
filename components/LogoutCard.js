import Link from 'next/link'
import { parseCookies } from 'nookies'

export default function LogoutCard() {
  /* get any cookies so we can display session information */
  const cookies = parseCookies()

  return (
    <div className='flex flex-col px-8 space-y-3 mt-4 items-center'>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg lg:w-2/5 min-w-min'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg font-bold text-gray-900 text-center'>
            Ready to log out of {'</> Hi'}?
          </h3>
        </div>
        <div className='border-t border-gray-200 flex flex-col items-center py-4 space-y-4'>
          <Link href='/api/logout'>
            <a href='#'>
              <div className='shadow-md p-2 rounded-md font-medium max-w-sm transition duraion-300 ease-in-out transform hover:scale-110 text-center flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z' />
                </svg>
                <span>Sign out</span>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a href='#'>
              <div className='shadow-md p-2 rounded-md font-medium max-w-sm transition duraion-300 ease-in-out transform hover:scale-110 text-center flex items-center space-x-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z' />
                </svg>
                <span className='px-2'>Home</span>
              </div>
            </a>
          </Link>
        </div>
        <div className='border-t border-gray-200 text-center py-4'>
          <h3 className='text-xs'>Come back soon {cookies.emailAddress}</h3>
          <h3 className='text-xs'> Terms of Service, Privacy Policy</h3>
        </div>
      </div>
    </div>
  )
}
