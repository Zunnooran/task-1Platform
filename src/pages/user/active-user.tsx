import { useState } from 'react';
import { IoAddOutline, IoSearchSharp } from 'react-icons/io5';
import { VscEye } from 'react-icons/vsc';

import Button from 'components/core-ui/button/button';

import DeleteIcon from 'assets/icons/deleteIcon.svg?react';

import { userData } from './components/data';

function ActiveUser() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredData = userData.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(100 / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setItemsPerPage(value);
      setCurrentPage(1);
    }
  };

  return (
    <div className='p-8 relative h-full flex flex-col'>
      <div className='flex items-start justify-between mb-6'>
        <div className='flex items-center md:gap-3 sm:gap-2 gap-1'>
          <h1 className='md:text-xl sm:text-base text-sm font-medium'>Active</h1>
          <div className='border border-gray-300 md2:w-[40px] md:w-[30px] w-[15px]' />
          <h1 className='text-gray-500 md:text-base sm:text-sm text-xxs'>Waiting list</h1>
        </div>
        <div className='flex flex-col items-end md2:gap-4 sm:gap-2 gap-1'>
          <Button
            className='bg-secondary md2:py-3 py-2   md2:gap-2 gap-1 md:text-base text-xs'
            suffixElement={<IoAddOutline className='md:text-xl text-sm' />}
          >
            Add New
          </Button>
          <div className='flex items-center border-b-2 border-gray-300 md2:w-[300px] md:w-[200px] w-[140px]'>
            <input
              type='text'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full border-none focus:ring-0 p-2 text-sm'
            />
            <IoSearchSharp className='text-gray-500 text-xl ml-2' />
          </div>
        </div>
      </div>

      <div className='flex-grow overflow-auto'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-white text-left border-2 border-gray-300 rounded-lg md:text-base text-sm'>
              <th className='md:p-4 p-2'>Name</th>
              <th className='md:p-4 p-2'>Type</th>
              <th className='md:p-4 p-2'>E-mail</th>
              <th className='md:p-4 p-2'>Organization</th>
              <th className='md:p-4 p-2'>Phone number</th>
              <th className='md:p-4 p-2'></th>
              <th className='md:p-4 p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user) => (
              <tr
                key={user.id}
                className='text-[#2D2D2D] border-b-2 border-gray-200 hover:bg-gray-100 cursor-pointer md:text-base text-xs'
              >
                <td className='md:p-3 px-1 overflow-auto'>
                  <div className='flex items-center justify-start md:gap-4 gap-1'>
                    <img src={user?.image} className='md:w-8 w-6 md:h-8 h-6 rounded-full' alt='user img' />
                    {user.name}
                  </div>
                </td>
                <td className='md:p-3 px-2'>{user.type}</td>
                <td className='md:p-3 px-2'>{user.email}</td>
                <td className='md:p-3 px-2'>{user.organization}</td>
                <td className='md:p-3 px-2'>{user.phone}</td>
                <td className='md:p-3 px-2'>
                  <span
                    className={`px-2 py-1 rounded ${
                      user.status === 'Accepted'
                        ? 'bg-[#0093831A] text-secondary border border-[#00938333]'
                        : 'bg-[#FF57221A] text-orange-500 border border-[#FF572233]'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className='px-3 py-2'>
                  <div className='flex-centered gap-2'>
                    <Button variant='text' className='bg-black md:p-2 p-1 hover:bg-slate-700'>
                      <VscEye className='md:text-xl text-base text-white' />
                    </Button>
                    <Button variant='text' className='md:py-1 px-2 border border-[#EF482333] hover:bg-red-100'>
                      <DeleteIcon className='md:w-4 w-2' />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex sm:flex-row flex-col sm:items-center items-end sm:justify-between justify-center mt-4'>
        <div className='md1:text-sm text-xxs'>
          Show
          <input
            type='number'
            min='1'
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className='mx-2 border border-gray-300 rounded p-1 md1:w-[60px] w-[50px]'
          />
          Entries
        </div>
        <div className='flex items-center gap-2 md1:text-sm text-xxs'>
          <button
            className={`md1:px-2 px-1 py-1 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;

            if (pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - currentPage) <= 1) {
              return (
                <button
                  key={pageNumber}
                  className={`md1:px-2 px-1 py-1 ${
                    currentPage === pageNumber ? 'text-secondary font-bold underline' : 'text-black'
                  }`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
                </button>
              );
            }

            if (
              (pageNumber === currentPage - 2 && currentPage > 3) ||
              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return (
                <span key={pageNumber} className='px-2 text-gray-500'>
                  ...
                </span>
              );
            }

            return null;
          })}

          <button
            className={`md1:px-2 px-1 py-1 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-secondary'}`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActiveUser;
