import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from 'react-router';
import type { LinksFunction } from 'react-router';

import './tailwind.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import type { Route } from './+types/root';
import { Button } from './components';

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
        <NavigationBar />

        <main>{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const navigate = useNavigate();

  let errorMessage: string = 'Something went very, very wrong!';
  let errorScore: string = '???';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data;
    errorScore = error.status.toString();
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorScore = 'Oh No!';
  }

  return (
    <div className='flex flex-col items-center justify-center gap-3 rounded-xl bg-red-900 p-10 font-Minecraftia'>
      <h1 className='text-4xl drop-shadow-minecraft'>You Died!</h1>
      <p>{errorMessage}</p>
      <p>
        Score: <span className='text-yellow-400'>{errorScore}</span>
      </p>

      <Button variant='success' className='w-1/2' onClick={() => navigate(-1)}>
        Respawn
      </Button>
      <Button variant='success' className='w-1/2' onClick={() => navigate('/')}>
        Title Screen
      </Button>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}
