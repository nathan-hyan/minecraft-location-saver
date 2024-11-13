export interface Location {
  id: string;
  title: string;
  description: string;
  screenshotSrc: string;
  realm: 'overworld' | 'nether' | 'end';
  type: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  x: number;
  y?: number;
  z: number;
}
