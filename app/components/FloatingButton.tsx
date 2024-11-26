import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

function FloatingButton() {
  const navigate = useNavigate();

  return (
    <div className='fixed bottom-8 right-8 float-right'>
      <button
        className='aspect-square rounded-full bg-emerald-500 duration-75 hover:bg-emerald-400 active:bg-emerald-600'
        onClick={() => navigate('/create')}
      >
        <FontAwesomeIcon icon={faPlus} height={64} width={64} size='xl' />
      </button>
    </div>
  );
}
export default FloatingButton;
