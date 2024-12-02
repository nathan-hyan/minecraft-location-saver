import { Form, redirect } from 'react-router';
import LocationForm from '~/components/LocationForm';
import type { ConstructionTypes, Location, Realms } from '~/types';
import type { Route } from './+types/create';

export const action = async ({ request }: Route.ActionArgs) => {
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

  fetch(`http://localhost:3000/locations`, {
    method: 'PUT',
    body: JSON.stringify(sanitizedOutput),
  });

  return redirect('/');
};

export default function route() {
  return (
    <Form method='post'>
      <LocationForm />
    </Form>
  );
}
