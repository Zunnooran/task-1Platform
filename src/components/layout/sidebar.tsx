import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from 'assets/images/main-logo.png';

import { footerItems, menuItems } from './components/data';

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`h-[96vh] px-4 fixed rounded-xl bg-white border-r w-64 flex flex-col justify-between overflow-auto transition-transform transform md:translate-x-0 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } md:block z-40`}
      >
        <div className='py-6 px-2'>
          <div className='pl-2'>
            <img src={LogoIcon} alt='logo' />
            <p className='text-sm text-right -mt-4 mr-1'>
              Partner <span className='text-secondary'>Portal</span>
            </p>
          </div>
        </div>

        <nav className='flex-1 py-2'>
          <ul className=''>
            {menuItems.map((item) => (
              <li key={item.key} className='relative'>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center md:gap-3 sm:gap-2 gap-1 p-2 rounded-lg ${
                      isActive ? 'bg-primary text-black' : 'text-black hover:bg-primary'
                    }`
                  }
                  onClick={() => item.children && handleDropdown(item.key.toString())}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className='absolute rounded-r-lg px-2 md:py-5 py-4 top-0 -left-4 bg-secondary border' />
                      )}
                      <item.icon
                        className={`md:text-2xl sm:text-xl text-lg md:max-w-[28px] sm:max-w-[20px] max-w-[18px] ${isActive ? 'text-secondary' : 'text-black'}`}
                      />
                      <span
                        className={`md:text-base sm:text-sm text-xs ${item.key === 1 ? 'font-semibold' : 'font-normal'}`}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>

                {item.children && openDropdown === item.key.toString() && (
                  <ul className='ml-8 mt-2 space-y-1 relative before:content-[""] before:absolute before:left-[-16px] before:top-0 before:bottom-0 before:w-[2px] sm:before:h-14 before:h-[52px] before:bg-gray-300'>
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            `flex items-center md:gap-2 gap-1 p-2 rounded-lg ${
                              isActive ? 'text-secondary' : 'text-gray-500 hover:bg-gray-100'
                            }`
                          }
                        >
                          <div className='border-2 border-gray-300 w-[20px] -ml-6' />
                          <span className='sm:text-sm text-xs'>{child.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className='pb-4 border-t md:pt-4 pt-2'>
          <ul>
            {footerItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center md:gap-3 sm:gap-2 gap-1 p-2 rounded-lg ${
                      isActive
                        ? 'text-primary'
                        : `${item.textClass} hover:bg-primary md:pb-4 pb-2` || 'text-black hover:bg-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`md:text-2xl sm:text-xl text-lg md:max-w-[28px] sm:max-w-[20px] max-w-[18px] ${isActive ? 'text-secondary' : ''}`}
                      />
                      <span className={`${isActive ? 'font-medium text-lg' : 'font-normal text-base'}`}>
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isVisible && <div className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden' onClick={onClose} />}
    </>
  );
};

export default Sidebar;
