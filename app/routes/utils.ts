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
