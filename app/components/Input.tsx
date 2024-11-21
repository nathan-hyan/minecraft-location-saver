import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

function Input({ name, label, ...props }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {!label ? null : (
        <label className='' htmlFor={name}>
          {label}:
        </label>
      )}
      <input
        {...props}
        className='h-8 rounded-md bg-slate-50 px-2 text-xs text-slate-800'
        type='text'
        id={name}
        name={name}
        placeholder={`${props.placeholder ?? ''} ${props.required ? '' : '(optional)'}`}
      />
    </div>
  );
}
export default Input;
