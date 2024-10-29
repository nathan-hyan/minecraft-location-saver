import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    rel: 'stylesheet',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>

      <body className='container mx-auto'>
        <nav className='relative mb-8 flex flex-col justify-center rounded-b-lg bg-sky-950 p-7'>
          <img
            src='https://minecraft.wiki/images/Minecraft_logo_2.svg?eeb79&format=original'
            alt='Minecraft Logo from Wiki'
            className={'h-16'}
          />
          <p className='absolute bottom-5 left-1/2 animate-expand text-center font-Minecraftia text-yellow-400'>
            This is some placeholder text!
          </p>
        </nav>

        <main>{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
