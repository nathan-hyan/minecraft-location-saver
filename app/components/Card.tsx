import { calculateCoordinates } from '~/utils';
import Chip from './Chip';

interface Props {
  location: {
    id: number;
    title: string;
    description: string;
    screenshotSrc: string;
    realm: 'overworld' | 'nether' | 'end';
    type:
      | 'mountain'
      | 'village'
      | 'cave'
      | 'desert'
      | 'ocean'
      | 'swamp'
      | 'plains';
    coordinates: {
      x: number;
      y: number;
      z: number;
    };
  };
}

function Card({
  location: {
    title,
    description,
    screenshotSrc,
    realm,
    type,
    coordinates: { x, y, z },
  },
}: Props) {
  const displayCoordinates = `${x} / ${y} / ${z}`;
  const contraryCoordinates = calculateCoordinates(x, y, z, realm);
  const displayContraryRealmCoordinates = `${contraryCoordinates.x} / ${contraryCoordinates.y} / ${contraryCoordinates.z}`;

  return (
    <div className='flex flex-col gap-4 rounded-xl bg-slate-800 p-4'>
      <img
        src={screenshotSrc}
        alt={title}
        className='aspect-video rounded-xl object-cover'
      />

      <div className='flex-1'>
        <h2 className='text-xl font-black'>{title}</h2>
        <p>{description}</p>
      </div>

      <div className='flex justify-between'>
        <div>
          <h3 className='text-xs font-light'>Overworld:</h3>
          <p className='text-xs font-bold'>{displayCoordinates}</p>
        </div>

        <div>
          <h3 className='text-xs font-light'>Nether:</h3>
          <p className='text-xs font-bold'>{displayContraryRealmCoordinates}</p>
        </div>
      </div>

      <div className='flex gap-2'>
        <Chip variant='success'>{realm}</Chip>
        <Chip variant='error'>{type}</Chip>
      </div>
    </div>
  );
}
export default Card;
