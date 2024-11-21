import { Realms } from './types';

export const calculateCoordinates = (
  x: number,
  z: number,
  realm: Realms,
  y?: number
) => {
  // Any to End
  if (realm === Realms.end) {
    return {
      x: '~',
      y: '~',
      z: '~',
    };
  }

  // Nether > Overworld
  if (realm === Realms.nether) {
    return {
      x: x / 8,
      y: y ?? '~',
      z: z / 8,
    };
  }

  // Overworld > Nether
  return {
    x: x * 8,
    y: y ?? '~',
    z: z * 8,
  };
};
