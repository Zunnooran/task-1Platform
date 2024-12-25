interface IProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectField = ({ label, name, options, value, onChange }: IProps) => (
  <div className='sm:mb-6 mb-2 flex flex-col sm:flex-row items-center md:text-base sm:text-sm text-xs'>
    <label htmlFor={name} className='font-medium w-full sm:w-1/3 mb-2 sm:mb-0'>
      {label}
    </label>
    <select
      name={name}
      id={name}
      className='w-full sm:w-2/3 border border-gray-100 rounded-md p-2'
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
