import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  inline?: boolean;
  options: {
    value: string | number;
    label: string;
  }[];
}

function Select({ name, label, inline, options, ...props }: Props) {
  return (
    <div className={`flex ${inline ? 'flex-row' : 'flex-col'} gap-2`}>
      <label htmlFor={name}>{label}:</label>
      <select
        {...props}
        defaultValue={props.defaultValue ?? ''}
        name={name}
        className='h-8 rounded-md bg-slate-50 px-2 text-xs text-slate-800'
      >
        <option value='' disabled>
          Select {label}...
        </option>
        {options.map(({ value, label }, i) => (
          <option key={value + i.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
