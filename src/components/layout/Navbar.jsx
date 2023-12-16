// libraries
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // hamburger menu
import { RxCross2 } from 'react-icons/rx';

// components
import { HeaderLogo, HeaderSearchForm } from '../../components';

// utils
import { headerMenuLinks } from '../../utils';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='bg-white dark:bg-slate-700'>
      <nav className=' border-gray-200 px-4 py-3  mx-auto max-w-screen-xl'>
        <div className='flex flex-wrap items-center justify-between flex-col ms:flex-row'>
          <div className='flex-1 flex justify-center ms:flex-none'>
            <HeaderLogo />
          </div>

          <div className='mt-2 flex flex-1 gap-2 w-full flex-row-reverse ms:mt-0 ms:flex-none ms:w-auto lg:flex-row lg:gap-8'>
            <div className='flex gap-4 items-center relative float-right'>
              <button
                className='cursor-pointer flex lg:hidden'
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? <RxCross2 /> : <AiOutlineMenu />}
              </button>
              <ul
                className={`${
                  showMenu ? '' : 'hidden'
                } flex-col border-2 border-transparent border-solid dark:border-slate-500 font-medium rounded-lg overflow-hidden absolute top-[2.3rem] right-0 w-[150px] lg:flex lg:flex-row lg:mt-0 lg:border-0 lg:space-x-8 lg:relative lg:top-auto lg:right-auto lg:w-full z-10`}
              >
                {headerMenuLinks.map((link, index) => (
                  <li key={link.text}>
                    <a
                      href={link.link}
                      className={` block py-2 px-4 text-black lg:rounded bg-light-100 text-sm lg:bg-transparent border-solid lg:text-primary-700 lg:p-0 hover:text-light-700 dark:hover:text-dark-200 dark:bg-slate-600 dark:text-slate-100 lg:dark:bg-transparent ${
                        index < headerMenuLinks.length - 1
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

            <HeaderSearchForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
