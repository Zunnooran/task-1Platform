import { useState } from 'react';

import { departments, roles } from './components/data';
import { InputField } from './components/inupt-fields';
import { SelectField } from './components/select-field';

function User() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    role: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert('User added!');
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      role: '',
    });
  };

  return (
    <div className='max-w-2xl mx-auto md:pt-12 pt-4 p-8 overflow-auto'>
      <h1 className='md:text-2xl sm:text-xl text-base font-bold md:mb-6 sm:mb-4 mb-2 text-[#2D2D2D] sm:text-left text-center'>
        User Information
      </h1>

      <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
        <label
          htmlFor='fullName'
          className='sm:font-medium font-normal w-full sm:w-1/3 mb-1 sm:mb-0 md:text-base sm:text-sm text-xs '
        >
          Full Name
        </label>
        <div className='flex items-center justify-center flex-col sm:flex-row w-full sm:w-2/3 md:gap-2 gap-1 '>
          <InputField
            label=''
            type='text'
            name='firstName'
            placeholder='First name here'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <InputField
            label=''
            type='text'
            name='lastName'
            placeholder='Last name'
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <InputField
        label='Email'
        type='email'
        name='email'
        placeholder='example@company.com'
        value={formData.email}
        onChange={handleInputChange}
      />

      <InputField
        label='Phone Number'
        type='tel'
        name='phone'
        placeholder='+971 xxx xxxx xxxx'
        value={formData.phone}
        onChange={handleInputChange}
      />

      <SelectField
        label='Department'
        name='department'
        options={departments}
        value={formData.department}
        onChange={handleInputChange}
      />

      <SelectField label='Role' name='role' options={roles} value={formData.role} onChange={handleInputChange} />

      <div className='flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-4'>
        <button
          className='sm:py-2 py-1 sm:px-6 px-3 md:text-base sm:text-sm text-xs rounded-md border border-gray-100 text-gray-400 hover:bg-gray-200 w-full sm:w-auto'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className='text-black sm:py-2 py-1 sm:px-6 px-3 md:text-base sm:text-sm text-xs rounded-md hover:bg-secondary bg-[#19D3C533] w-full sm:w-auto'
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default User;
