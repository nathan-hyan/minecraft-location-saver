import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
}

function Chip({ children, className, onClick, variant = 'success' }: Props) {
  const getVariantClassName = () => {
    switch (variant) {
      case 'success':
        return 'bg-emerald-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg ${getVariantClassName()} px-2 py-1 text-xs text-slate-50 ${className}`}
    >
      {children}
    </button>
  );
}
export default Chip;
