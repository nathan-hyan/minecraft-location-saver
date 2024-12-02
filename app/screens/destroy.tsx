import { redirect } from 'react-router';
import { deleteLocation } from './utils';
import type { Route } from './+types/destroy';

export const action = async ({ params }: Route.ActionArgs) => {
  await deleteLocation(params.id);
  return redirect('/');
};
