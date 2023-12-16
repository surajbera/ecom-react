// libraries
import { LuSearch } from 'react-icons/lu';

const HeaderSearchForm = () => {
  return (
    <form
      className='max-w-[300px] mx-auto nms:relative nms:left-[16px] ms:left-auto'
      autoComplete='off'
    >
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'>
          <LuSearch size='20' className='text-gray-400' />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-2 pl-9 pr-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none'
          placeholder='Search Products...'
          required=''
        />
        <button
          type='submit'
          className='text-white absolute bg-light-700 hover:bg-light-800 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-dark-600 dark:hover:bg-dark-700 right-1.5 top-1/2 -translate-y-2/4 outline-none'
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default HeaderSearchForm;
