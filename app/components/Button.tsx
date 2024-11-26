import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant:
    | 'success'
    | 'error'
    | 'info'
    | 'outlined-success'
    | 'outlined-error'
    | 'outlined-info';
}

function Button({ children, ...props }: Props) {
  const getVariantClass = (variant: Props['variant']) => {
    switch (variant) {
      case 'success':
        return 'bg-emerald-500 text-white hover:bg-emerald-400 focus:ring-emerald-500 active:bg-emerald-600';
      case 'error':
        return 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-700 active:bg-red-700';
      case 'info':
        return 'bg-sky-500 text-white hover:bg-sky-400 focus:ring-sky-500 active:bg-sky-600';
      case 'outlined-success':
        return 'border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white focus:ring-emerald-500 active:bg-emerald-600 active:text-white';
      case 'outlined-error':
        return 'border border-red-600 text-red-600 hover:bg-red-500 hover:text-white focus:ring-red-700 active:bg-red-700 active:text-white';
      case 'outlined-info':
        return 'border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white focus:ring-sky-500 active:bg-sky-600 active:text-white';
      default:
        return 'bg-emerald-500 text-white hover:bg-emerald-400 focus:ring-emerald-500 active:bg-emerald-600';
    }
  };

  const getDisabledVariantClass = (variant: Props['variant']) => {
    switch (variant) {
      case 'success':
        return 'bg-gray-500 text-white hover:bg-gray-400 focus:ring-gray-500';
      case 'error':
        return 'bg-gray-500 text-white hover:bg-gray-400 focus:ring-gray-500';
      case 'info':
        return 'bg-gray-500 text-white hover:bg-gray-400 focus:ring-gray-500';
      case 'outlined-success':
        return 'border border-gray-500 text-gray-500 hover:border-gray-400 hover:text-gray-400 focus:ring-emerald-500';
      case 'outlined-error':
        return 'border border-gray-500 text-gray-500 hover:border-gray-400 hover:text-gray-400 focus:ring-emerald-500';
      case 'outlined-info':
        return 'border border-gray-500 text-gray-500 hover:border-gray-400 hover:text-gray-400 focus:ring-emerald-500';
    }
  };

  return (
    <button
      {...props}
      className={`${props.disabled ? getDisabledVariantClass(props.variant) : getVariantClass(props.variant)} rounded-md px-4 py-2 align-middle ${props.className}`}
      type={props.type || 'button'}
    >
      {children}
    </button>
  );
}
export default Button;
