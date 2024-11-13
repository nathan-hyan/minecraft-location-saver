import { useNavigate } from '@remix-run/react';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav className='relative mb-8 flex flex-col justify-center rounded-b-lg bg-sky-950 p-7'>
      <img
        src='https://minecraft.wiki/images/Minecraft_logo_2.svg?eeb79&format=original'
        alt='Minecraft Logo from Wiki'
        className={'h-16'}
        onClick={() => navigate('/')}
      />
      <p className='absolute bottom-5 left-1/2 animate-expand text-center font-Minecraftia text-yellow-400'>
        This is some placeholder text!
      </p>
    </nav>
  );
}
export default NavigationBar;
