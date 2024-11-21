import Card from '~/components/Card';
import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';

import { json, useLoaderData } from '@remix-run/react';

import { getLocations } from './utils';
import FloatingButton from '~/components/FloatingButton';
import ControlPanel from '~/components/ControlPanel';

export const meta: MetaFunction = () => {
  return [
    { title: 'Minecraft Location Storage' },
    { name: 'description', content: 'Your Minecraft Location Storage' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pageSize = Number(url.searchParams.get('pageSize')) || 4;
  const currentPage = Number(url.searchParams.get('currentPage')) || 1;

  const locations = await getLocations({
    currentPage,
    pageSize,
  });

  return json({
    locations: locations.data,
    params: { pageSize, currentPage, totalPages: locations.pages },
  });
}

export default function Index() {
  const { locations, params } = useLoaderData<typeof loader>();

  return (
    <>
      <ControlPanel params={params} />

      <div className='xs:grid-cols-1 grid grid-flow-row gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {locations?.map((location) => (
          <Card key={location.id} location={location} />
        ))}
      </div>

      <FloatingButton />
    </>
  );
}
