import { Form } from 'react-router';
import LocationForm from '~/components/LocationForm';
import type { Route } from '../edit/+types/route';
import { getSingleLocation } from '../utils';

export const loader = async ({ params }: Route.LoaderArgs) => {
  const location = await getSingleLocation(params.id);

  return { location };
};

export default function route({ loaderData }: Route.ComponentProps) {
  const { location } = loaderData;

  return (
    <Form method='post'>
      <LocationForm data={location} />
    </Form>
  );
}
