// libraries
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // hamburger menu
import { RxCross2 } from 'react-icons/rx';

// utils
import { headerMenuLinks } from '../../utils';

const MobileNavLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='flex gap-4 items-center relative float-right lg:hidden'>
      <button className='cursor-pointer flex lg:hidden' onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <RxCross2 className='dark:text-white' />
        ) : (
          <AiOutlineMenu className='dark:text-white' />
        )}
      </button>
      {showMenu && (
        <nav className='flex-col border-2 border-transparent border-solid dark:border-slate-500 font-medium rounded-lg overflow-hidden absolute top-[2.3rem] right-0 w-[150px] z-10'>
          <ul>
            {headerMenuLinks.map((link, index) => (
              <li key={link.text}>
                <a
                  href={link.link}
                  className={`block py-2 px-4 text-black bg-light-100 text-sm border-solid dark:bg-slate-600 dark:text-slate-100 ${
                    index < headerMenuLinks.length - 1
                      ? 'border-b-2 border-light-200 dark:border-slate-500'
                      : 'lg:border-b-0'
                  } `}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
export default MobileNavLinks;
