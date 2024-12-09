import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router';
import { Button, Input, Select } from '~/components';
import { CONSTRUCTION_TYPES, REALMS } from '~/constants';
import type { Location } from '~/types';

interface Props {
  data?: Location;
}

function LocationForm({ data }: Props) {
  const [base64, setBase64] = useState(data?.screenshotSrc || '');

  const navigate = useNavigate();
  const { state } = useNavigation();

  const isSubmitting = state === 'submitting';

  const handleImageOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = (e.target as FileReader).result as string;
        setBase64(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const getButtonText = () => {
    if (data) {
      return isSubmitting ? 'Updating...' : 'Update Location';
    }
    return isSubmitting ? 'Creating...' : 'Create Location';
  };

  return (
    <>
      <main className='flex flex-row justify-center gap-8'>
        <div className='w-1/2 rounded-xl bg-slate-800 p-4'>
          <input
            type='text'
            name='screenshotSrc'
            hidden
            value={base64}
            readOnly
          />

          {base64.length < 1 ? (
            <div className='flex aspect-video items-center justify-center rounded-xl border-2 border-gray-500 p-4 font-bold text-gray-500'>
              No image loaded
            </div>
          ) : (
            <img
              src={base64}
              className='aspect-video w-full rounded-xl object-cover'
            />
          )}

          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={handleImageOnChange}
            required={!data}
            className='mt-6 w-full rounded-xl border-2 border-gray-500 p-4 text-center'
          />
        </div>

        <div className='flex flex-col gap-4 rounded-xl bg-slate-800 p-4'>
          <Input
            name='title'
            label='Location Name'
            placeholder='My beautiful home...'
            defaultValue={data?.title || ''}
            required={!data}
          />
          <Input
            name='description'
            label='Description'
            placeholder='Built it with my own two hands...'
            defaultValue={data?.description || ''}
            required={!data}
          />
          <Select
            name='realm'
            label='Realm'
            options={REALMS}
            required={!data}
            defaultValue={data?.realm}
          />
          <Select
            name='type'
            label='Construction Type'
            options={CONSTRUCTION_TYPES}
            defaultValue={data?.type}
          />
          <div className='flex flex-col gap-2'>
            <p>Coordinates:</p>
            <div className='flex w-full flex-row gap-2'>
              <Input
                name='x'
                placeholder='X'
                required={!data}
                type='number'
                defaultValue={data?.coordinates?.x}
              />
              <Input
                name='y'
                placeholder='Y'
                type='number'
                defaultValue={data?.coordinates?.y}
              />
              <Input
                name='z'
                placeholder='Z'
                required={!data}
                type='number'
                defaultValue={data?.coordinates?.z}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className='mt-8 flex w-full justify-center gap-8 rounded-xl bg-slate-800 p-4'>
        <Button variant='success' type='submit' disabled={isSubmitting}>
          {getButtonText()}
        </Button>
        <Button
          variant='outlined-error'
          onClick={() => navigate('/')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </footer>
    </>
  );
}
export default LocationForm;
