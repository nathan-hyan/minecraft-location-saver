import { Form, redirect, useNavigate } from '@remix-run/react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/Select';
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
  const navigate = useNavigate();

  return (
    <Form method='post'>
      <main className='flex flex-row justify-center gap-8'>
        <div className='w-1/2 rounded-xl bg-slate-800 p-4'>
          <input type='file' name='image' accept='image/*' />
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
            required
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
