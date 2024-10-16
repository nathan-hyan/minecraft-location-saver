import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant: 'success' | 'error' | 'warning' | 'info' | 'default';
}

function Chip({ children, variant = 'success' }: Props) {
  return (
    <p className='rounded-lg bg-emerald-500 px-2 py-1 text-xs text-slate-50'>
      {children}
    </p>
  );
}
export default Chip;
