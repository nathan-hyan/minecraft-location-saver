import { Form, redirect } from 'react-router';
import LocationForm from '~/components/LocationForm';
import type { ConstructionTypes, Location, Realms } from '~/types';
import { getSingleLocation } from '../utils';
import type { Route } from './+types/route';

export const loader = async ({ params }: Route.LoaderArgs) => {
  const location = await getSingleLocation(params.id);

  return { location };
};

export const action = async ({ request, params }: Route.ActionArgs) => {
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

  fetch(`http://localhost:3000/locations/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(sanitizedOutput),
  });

  return redirect('/');
};

export default function route({ loaderData }: Route.ComponentProps) {
  const { location } = loaderData;

  return (
    <Form method='put'>
      <LocationForm data={location} />
    </Form>
  );
}
