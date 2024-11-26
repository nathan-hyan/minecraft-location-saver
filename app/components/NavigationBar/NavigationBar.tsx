import { useLocation, useNavigate, useSearchParams } from 'react-router';
import { getSplashText } from './utils';
import { useEffect, useState } from 'react';

function NavigationBar() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { pathname } = useLocation();
  const [splash, setSplash] = useState("If you're reading this, don't!");

  useEffect(() => {
    const splashText = getSplashText(pathname);
    setSplash(splashText);
  }, [pathname]);

  return (
    <nav className='relative mb-8 flex flex-col justify-center rounded-b-lg bg-sky-950 p-7'>
      <img
        src='https://minecraft.wiki/images/Minecraft_logo_2.svg?eeb79&format=original'
        alt='Minecraft Logo from Wiki'
        className={'h-16'}
        onClick={() => navigate(`/?${params.toString()}`)}
      />

      <p className='absolute bottom-5 left-1/2 animate-expand font-Minecraftia text-yellow-400'>
        {splash}
      </p>
    </nav>
  );
}
export default NavigationBar;
