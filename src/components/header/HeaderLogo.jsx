// libraries
import { Link } from 'react-router-dom';
import { BiSolidPurchaseTag } from 'react-icons/bi';

const HeaderLogo = () => {
  return (
    <h1>
      <Link to='/' className='flex items-center gap-1'>
        <span>
          <BiSolidPurchaseTag size={26} className='text-light-700 dark:text-white' />
        </span>
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-light-700'>
          EcomReact
        </span>
      </Link>
    </h1>
  );
};
export default HeaderLogo;
