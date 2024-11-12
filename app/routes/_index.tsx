import Card from '~/components/Card';
import { type MetaFunction } from '@remix-run/node';
import { useQuery } from '@tanstack/react-query';
import { json, useLoaderData } from '@remix-run/react';

import { getLocations } from './utils';
import FloatingButton from '~/components/FloatingButton';

export const meta: MetaFunction = () => {
  return [
    { title: 'Minecraft Location Storage' },
    { name: 'description', content: 'Your Minecraft Location Storage' },
  ];
};

export async function loader() {
  const locations = await getLocations();
  return json({ locations });
}

export default function Index() {
  const { locations } = useLoaderData<typeof loader>();
  const { data } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
    initialData: locations,
  });

  return (
    <>
      <div className='xs:grid-cols-1 grid grid-flow-row gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.map((location) => <Card key={0} location={location} />)}
      </div>

      <FloatingButton />
    </>
  );
}
