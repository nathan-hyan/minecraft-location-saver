import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  className?: string;
  onClick?: () => void;
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
    <div
      onClick={onClick}
      className={`rounded-lg ${getVariantClassName()} px-2 py-1 text-xs text-slate-50 ${className}`}
    >
      {children}
    </div>
  );
}
export default Chip;
