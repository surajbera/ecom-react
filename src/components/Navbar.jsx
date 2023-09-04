import { BiSolidPurchaseTag } from 'react-icons/bi';

const Navbar = () => {
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
    'block py-2 pr-4 pl-3 text-black rounded bg-light-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white text-sm hover:text-light-700 dark:hover:text-dark-200';

  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-600'>
        <div className='flex flex-wrap items-center mx-auto max-w-screen-xl justify-between'>
          <div className='flex gap-4'>
            <a href='https://flowbite.com' className='flex items-center gap-1'>
              <span>
                <BiSolidPurchaseTag size={24} />
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
                  className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-light-500 focus:border-light-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-500 dark:focus:border-dark-500'
                  placeholder='Search Products...'
                  required=''
                />
                <button
                  type='submit'
                  className='text-white absolute right-2.5 bottom-2.5 bg-light-700 hover:bg-light-800 focus:ring-4 focus:outline-none focus:ring-light-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800'
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            {headerLinks.map((link) => (
              <li key={link}>
                <a href={link.link} className={navLinkClasses}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
