import { type Location } from '../types';

export const getLocations: () => Promise<Location[]> = () =>
  fetch('http://localhost:3000/locations').then((res) => res.json());
