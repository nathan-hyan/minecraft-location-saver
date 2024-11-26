import { calculateCoordinates } from '~/utils';
import Chip from './Chip';
import { type Location } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

interface Props {
  location: Location;
}

function Card({
  location: {
    id,
    title,
    description,
    screenshotSrc,
    realm,
    type,
    coordinates: { x, y, z },
  },
}: Props) {
  const navigate = useNavigate();

  const displayCoordinates = `${x} / ${y ?? '~'} / ${z}`;
  const contraryCoordinates = calculateCoordinates(x, z, realm, y);
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

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Chip variant='success'>{realm}</Chip>
          {type && <Chip variant='warning'>{type}</Chip>}
        </div>
        <Chip variant='info' className='cursor-pointer'>
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => navigate(`/edit/${id}`)}
          />
        </Chip>
      </div>
    </div>
  );
}
export default Card;
