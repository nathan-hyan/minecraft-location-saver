import Card from '~/components/Card';
import { LoaderFunctionArgs, type MetaFunction } from 'react-router';

import { useLoaderData, useNavigation } from 'react-router';

import { getLocations } from './utils';
import { ControlPanel, FloatingButton } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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

  return {
    locations: locations.data,
    params: { pageSize, currentPage, totalPages: locations.pages },
  };
}

export default function Index() {
  const { locations, params } = useLoaderData<typeof loader>();
  const { state } = useNavigation();

  return (
    <>
      <ControlPanel params={params} />

      {state === 'loading' ? (
        <div className='flex flex-row items-center justify-center gap-3 rounded-xl bg-slate-800 p-4'>
          <FontAwesomeIcon icon={faSpinner} spin />
          <p>Loading...</p>
        </div>
      ) : (
        <div className='xs:grid-cols-1 grid grid-flow-row gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {locations?.map((location) => (
            <Card key={location.id} location={location} />
          ))}
        </div>
      )}

      <FloatingButton />
    </>
  );
}
