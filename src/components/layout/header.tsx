import { useState } from 'react';
import { RiEditLine, RiMenuLine } from 'react-icons/ri';

import Bell from 'components/svgs/bell';
import DropdownArrow from 'components/svgs/dropdown-arrow';

import userImg from 'assets/images/user.jpg';

import { languages } from './components/data';
import { ILanguage } from './components/types';

const Header = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [showEditIcon, setShowEditIcon] = useState(false);

  const handleLanguageChange = (language: ILanguage) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className='flex items-center justify-between'>
      <div className='2xl:w-[65%] xl:w-[60%] lg:w-[55%] md2:w-[49%] md1:w-[42%] md:w-[30%] w-0 bg-white py-10 rounded-2xl'></div>

      <div className='2xl:w-[34%] xl:w-[39%] lg:w-[44%] md2:w-[50%] md1:w-[57%] md:w-[69%] w-full flex items-center md:justify-start justify-between px-4 py-5 rounded-2xl gap-2 bg-white'>
        <button className='block md:hidden text-gray-600 p-2 rounded-lg' onClick={onMenuToggle}>
          <RiMenuLine className='w-6 h-6' />
        </button>
        <div className='w-full flex items-center md:justify-start justify-end 2xl:gap-10 xl:gap-8 md2:gap-6 sm:gap-3 gap-2'>
          <div className='relative'>
            <div
              className='flex-centered xl:gap-2  gap-1 border-2 border-gray-500 rounded-full xl:px-3 px-1 py-1 text-sm shadow-sm cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={selectedLanguage.logo}
                alt={`${selectedLanguage.name} Flag`}
                className='ms:w-5 w-4 sm:h-5 h-4 rounded-full'
              />
              <span className='sm:font-medium font-normal sm:text-base text-sm'>{selectedLanguage.name}</span>
              <DropdownArrow classNames={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
              <ul className='absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10'>
                {languages.map((language) => (
                  <li
                    key={language.key}
                    className='flex items-center xl:gap-2 gap-1 p-2 cursor-pointer hover:bg-gray-100'
                    onClick={() => handleLanguageChange(language)}
                  >
                    <img
                      src={language.logo}
                      alt={`${language.name} Flag`}
                      className='sm:w-5  w-4 sm:h-5 h-4 rounded-full'
                    />
                    <span className='text-sm font-medium'>{language.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='relative'>
            <Bell classNames='w-6 h-6 text-gray-600' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white xl:text-xs text-xxs rounded-full w-5 h-5 flex items-center justify-center'>
              99
            </span>
          </div>

          <div className='relative flex items-center sm:gap-2 gap-1 text-right pr-8'>
            <div>
              <p className='sm;text-sm text-xs font-medium'>John Smith</p>
              <p className='sm:text-xs text-xxs text-gray-500'>Director</p>
            </div>
            <div
              className='relative flex items-center'
              onMouseEnter={() => setShowEditIcon(true)}
              onMouseLeave={() => setShowEditIcon(false)}
            >
              <img src={userImg} alt='Profile' className='w-10 h-10 rounded-full border border-gray-200 z-10' />

              <button
                className={`absolute w-10 h-10 bg-gray-200 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  showEditIcon
                    ? '2xl:translate-x-11 translate-x-10 translate-y-0 opacity-100 z-20 shadow-md'
                    : '-translate-x-5 opacity-0 z-0'
                }`}
                style={{ transformOrigin: 'center' }}
                title='Edit Profile'
              >
                <RiEditLine className=' text-black' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
