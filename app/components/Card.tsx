import { calculateCoordinates } from '~/utils';
import Chip from './Chip';
import { type Location } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Form, useNavigate } from 'react-router';

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

        <div className='flex gap-2'>
          <Chip
            variant='info'
            className='cursor-pointer'
            onClick={() => navigate(`/edit/${id}`)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Chip>

          <Form
            action={`destroy/${id}`}
            method='post'
            onSubmit={(event) => {
              const response = confirm(
                'Do you really want to delete this location?'
              );

              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <Chip variant='error' className='cursor-pointer' type='submit'>
              <FontAwesomeIcon icon={faTrash} />
            </Chip>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Card;
