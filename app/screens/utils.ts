import { type Location } from '../types';

interface Props {
  currentPage: number;
  pageSize: number;
}

export const getLocations: (props: Props) => Promise<{
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Location[];
}> = ({ currentPage, pageSize }) =>
  fetch(
    `http://localhost:3000/locations?_page=${currentPage ?? 1}&_per_page=${pageSize ?? 10}`
  ).then((res) => res.json());

export const getSingleLocation: (id: string) => Promise<Location> = (id) =>
  fetch(`http://localhost:3000/locations/${id}`).then((res) => {
    if (res.status !== 200)
      throw new Response('Failed to fetch location, make sure it exists!', {
        status: 404,
      });

    return res.json();
  });

export const deleteLocation: (id: string) => Promise<void> = (id) =>
  fetch(`http://localhost:3000/locations/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (res.status !== 200)
      throw new Response('Failed to delete location, make sure it exists!', {
        status: 404,
      });
  });
