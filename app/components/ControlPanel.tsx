import { useSearchParams } from 'react-router';
import Select from './Select';
import Button from './Button';
import { ChangeEventHandler } from 'react';

interface Props {
  params: { pageSize: number; currentPage: number; totalPages: number };
}

function ControlPanel({
  params: { pageSize, currentPage, totalPages },
}: Props) {
  const [, setSearchParams] = useSearchParams();

  const handlePageChange = (type: 'add' | 'subtract') => {
    if (type === 'add') {
      setSearchParams((prev) => {
        prev.set('currentPage', String(Number(currentPage) + 1));
        return prev;
      });
    }
    if (type === 'subtract') {
      setSearchParams((prev) => {
        prev.set('currentPage', String(Number(currentPage) - 1));
        return prev;
      });
    }
  };

  const handlePageSizeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();

    // If the page size is bigger than the current page, reset to 1
    if (Number(e.target.value) > pageSize) {
      setSearchParams((prev) => {
        prev.set('currentPage', String(1));
        return prev;
      });
    }

    // Set new page size
    setSearchParams((prev) => {
      prev.set('pageSize', e.target.value);
      return prev;
    });
  };

  return (
    <div className='mb-8 flex flex-row justify-between  gap-4 rounded-xl bg-slate-800 p-4'>
      <Select
        inline
        label='Page Size'
        defaultValue={pageSize}
        onChange={handlePageSizeChange}
        name='pageSize'
        options={[
          {
            value: 4,
            label: '4 Items',
          },
          {
            value: 8,
            label: '8 Items',
          },
          {
            value: 12,
            label: '12 Items',
          },
          {
            value: 16,
            label: '16 Items',
          },
        ]}
      ></Select>

      <div className='flex justify-center gap-8'>
        <Button
          variant='outlined-info'
          disabled={currentPage <= 1}
          onClick={() => handlePageChange('subtract')}
        >
          {'<<'}
        </Button>
        <p>
          Page {currentPage} / {totalPages}
        </p>
        <Button
          variant='outlined-info'
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange('add')}
        >
          {'>>'}
        </Button>
      </div>
    </div>
  );
}
export default ControlPanel;
