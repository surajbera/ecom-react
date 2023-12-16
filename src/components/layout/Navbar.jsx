// components
import { DesktopNavLinks, HeaderLogo, HeaderSearchForm, MobileNavLinks } from '../../components';

const Navbar = () => {
  return (
    <header className='bg-white dark:bg-slate-700'>
      <nav className=' border-gray-200 px-4 py-3  mx-auto max-w-screen-xl'>
        <div className='flex flex-wrap items-center justify-between flex-col ms:flex-row'>
          <div className='flex-1 flex justify-center ms:flex-none'>
            <HeaderLogo />
          </div>
          <DesktopNavLinks />
          <div className='mt-2 flex flex-1 gap-2 w-full flex-row-reverse ms:mt-0 ms:flex-none ms:w-auto lg:flex-row lg:gap-8'>
            <MobileNavLinks />
            <HeaderSearchForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
