import { Form, redirect, useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { Button, Input, Select } from '~/components';
import { CONSTRUCTION_TYPES, REALMS } from '~/constants';
import { ConstructionTypes, Location, Realms } from '~/types';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const sanitizedOutput: Location = {
    title: String(values.title),
    description: String(values.description),
    screenshotSrc: String(values.screenshotSrc),
    realm: values.realm as Realms,
    type: values.type as ConstructionTypes,
    coordinates: {
      x: Number(values.x),
      y: values.y ? Number(values.y) : undefined,
      z: Number(values.z),
    },
    createdAt: new Date().toISOString(),
  };

  fetch('http://localhost:3000/locations', {
    method: 'POST',
    body: JSON.stringify(sanitizedOutput),
  });

  return redirect('/');
}

export default function route() {
  const [base64, setBase64] = useState('') 
  const navigate = useNavigate();

  const handleImageOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = (e.target as FileReader).result as string;
        setBase64(base64)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form method='post'>
      <main className='flex flex-row justify-center gap-8'>
        <div className='w-1/2 rounded-xl bg-slate-800 p-4'>
          <input type="text" name='screenshotSrc' hidden value={base64}/>
          
          {base64.length < 1 ? <div className='border-2 border-gray-500 p-4 rounded-xl aspect-video flex justify-center items-center font-bold text-gray-500'>No image loaded</div> : <img src={base64} className='aspect-video w-full rounded-xl object-cover'/>}
          <input type='file' name='image' accept='image/*' onChange={handleImageOnChange} required className='font-poppins mt-6 border-2 border-gray-500 p-4 rounded-xl w-full text-center'/>
        </div>

        <div className='flex flex-col gap-4 rounded-xl bg-slate-800 p-4'>
          <Input
            name='title'
            label='Location Name'
            placeholder='My beautiful home...'
            required
          />
          <Input
            name='description'
            label='Description'
            placeholder='Built it with my own two hands...'
            required
          />
          <Select name='realm' label='Realm' options={REALMS} required />
          <Select
            name='type'
            label='Construction Type'
            options={CONSTRUCTION_TYPES}
          />
          <div className='flex flex-col gap-2'>
            <p>Coordinates:</p>
            <div className='flex w-full flex-row gap-2'>
              <Input name='x' placeholder='X' required type='number' />
              <Input name='y' placeholder='Y' type='number' />
              <Input name='z' placeholder='Z' required type='number' />
            </div>
          </div>
        </div>
      </main>
      <footer className='mt-8 flex w-full justify-center gap-8 rounded-xl bg-slate-800 p-4'>
        <Button variant='success' type='submit'>
          Create Location
        </Button>
        <Button variant='outlined-error' onClick={() => navigate('/')}>
          Cancel
        </Button>
      </footer>
    </Form>
  );
}
