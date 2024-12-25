interface IProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ label, type, name, placeholder, value, onChange }: IProps) => (
  <div className='sm:mb-6 mb-2 flex flex-col w-full sm:flex-row items-center'>
    {label && (
      <label
        htmlFor={name}
        className='sm:font-medium font-normal w-full sm:w-1/3 mb-2 sm:mb-0 md:text-base sm:text-sm text-xs'
      >
        {label}
      </label>
    )}
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`w-full border border-gray-100 rounded-md sm:p-2 p-1 ${label ? ' sm:w-2/3 w-full' : 'sm:ml-1 '}`}
      value={value}
      onChange={onChange}
    />
  </div>
);
