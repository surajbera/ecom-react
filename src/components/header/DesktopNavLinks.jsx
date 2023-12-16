// utils
import { headerMenuLinks } from '../../utils';

const DesktopNavLinks = () => {
  return (
    <ul className='hidden font-medium lg:flex flex-row space-x-8 relative'>
      {headerMenuLinks.map((link) => (
        <li key={link.text}>
          <a
            href={link.link}
            className='text-black text-sm text-primary-700 hover:text-light-700 dark:hover:text-dark-200 dark:text-slate-100'
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default DesktopNavLinks;
