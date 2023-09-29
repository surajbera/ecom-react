import { useState } from 'react';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const headerLinks = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/products',
      text: 'Products',
    },
    {
      link: '/login',
      text: 'Login',
    },
    {
      link: '/signup',
      text: 'Sign Up',
    },
    {
      link: '/cart',
      text: 'My Orders',
    },
    {
      link: '/logout',
      text: 'Logout',
    },
  ];
  const navLinkClasses =
    'block py-2 px-4 text-black lg:rounded bg-light-100 text-sm lg:bg-transparent border-solid lg:text-primary-700 lg:p-0 dark:text-white hover:text-light-700 dark:hover:text-dark-200 dark:bg-slate-600 dark:text-slate-100';

  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 py-2.5 dark:bg-slate-600 mx-auto max-w-screen-xl'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex gap-4'>
            <a href='https://flowbite.com' className='flex items-center gap-1'>
              <span>
                <BiSolidPurchaseTag size={24} color='#1e40af' />
              </span>
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white text-light-700 dark:text-white'>
                EcomReact
              </span>
            </a>

            <form className='min-w-[300px]'>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full p-2 pl-9 pr-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-light-500 focus:border-light-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-500 dark:focus:border-dark-500'
                  placeholder='Search Products...'
                  required=''
                />
                <button
                  type='submit'
                  className='text-white absolute bg-light-700 hover:bg-light-800 focus:ring-4 focus:outline-none focus:ring-light-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800 right-1.5 top-1/2 -translate-y-2/4'
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className='flex gap-4 items-center relative'>
            <span className='cursor-pointer flex lg:hidden' onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <RxCross2 /> : <AiOutlineMenu />}
            </span>
            <ul
              className={`${
                showMenu ? '' : 'hidden'
              } border-2 border-transparent border-solid dark:border-slate-500 lg:flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 rounded-lg overflow-hidden absolute top-6 right-0 w-[150px] lg:relative lg:top-auto lg:right-auto lg:w-full`}
            >
              {headerLinks.map((link, index) => (
                <li key={link.text}>
                  <a
                    href={link.link}
                    className={` ${navLinkClasses} ${
                      index < headerLinks.length - 1
                        ? 'border-b-2 border-light-200 dark:border-slate-500 lg:border-b-0'
                        : 'lg:border-b-0'
                    } `}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
