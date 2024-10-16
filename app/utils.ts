export const calculateCoordinates = (
  x: number,
  y: number,
  z: number,
  realm: 'overworld' | 'nether' | 'end'
) => {
  if (realm === 'end') {
    return {
      x: '~',
      y: '~',
      z: '~',
    };
  }

  if (realm === 'nether') {
    return {
      x: x / 8,
      y,
      z: z / 8,
    };
  }

  return {
    x: x * 8,
    y,
    z: z * 8,
  };
};
