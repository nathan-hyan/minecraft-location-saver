import Card from '~/components/Card';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='xs:grid-cols-1 grid grid-flow-row gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {resources.map((location) => (
        <Card key={0} location={location} />
      ))}
    </div>
  );
}

const resources = [
  {
    id: 0,
    title: 'Montaña que me gusta',
    description:
      'La captura la saqué de reddit, me pareció apropiada y bueno... la usé',
    screenshotSrc:
      'https://preview.redd.it/ebx3u9ub1yq51.png?auto=webp&s=19e99d66ab8992e913641e6f72810063790e201f',
    realm: 'overworld' as const,
    type: 'mountain' as const,
    coordinates: {
      x: -129,
      y: 88,
      z: 284,
    },
  },
  {
    id: 1,
    title: 'Minecraft beta',
    description:
      'Esta es la versión beta, no se puede jugar, pero es una versión de prueba. No se ha publicado el juego en el juego. Todo esto lo inventó supermaven jajaja',
    screenshotSrc:
      'https://preview.redd.it/minecraft-beta-screenshots-v0-chwa5lx49nob1.png?width=1080&crop=smart&auto=webp&s=24f72f0e7b128bc65369fc5cee47c38ee945d4a1',
    realm: 'overworld' as const,
    type: 'plains' as const,
    coordinates: {
      x: -129,
      y: 88,
      z: 284,
    },
  },
  {
    id: 2,
    title: 'Sugarcane farm',
    description:
      'Un monton de sugarcanes debajo de una montaña. llenisimo de antorchas y un cerdito bien bonico',
    screenshotSrc:
      'https://preview.redd.it/minecraft-beta-screenshots-v0-8wc9hp669nob1.png?width=1920&format=png&auto=webp&s=9b68d91816c701813b0d005cbdb88baea084921f',
    realm: 'overworld' as const,
    type: 'plains' as const,
    coordinates: {
      x: -129,
      y: 88,
      z: 284,
    },
  },
  {
    id: 3,
    title: 'Los panas',
    description:
      'Ahre que en reddit dice que son marido y mujer: Hardcore world with husband. Built swing for perfectly generated tree. Pose for screenshot. Husband adds lava feature.',
    screenshotSrc:
      'https://preview.redd.it/a-screenshot-story-v0-nvf3zehp5akc1.jpg?width=1080&crop=smart&auto=webp&s=b73057804caf42953a5566c8846bdfde0efdb475',
    realm: 'overworld' as const,
    type: 'plains' as const,
    coordinates: {
      x: -129,
      y: 88,
      z: 284,
    },
  },
  {
    id: 4,
    title: 'OH GOD OH NO',
    description:
      'QUE HICISTE FLACO POR EL AMOR DE DIOS POR FAVOR SACA ESO ESTAMOS EN HARDCORE MIGUEL QUE HCIISTE MIRA SE QUEMA LA HAMACAAAAA',
    screenshotSrc:
      'https://preview.redd.it/a-screenshot-story-v0-aeiabchp5akc1.jpg?width=2560&format=pjpg&auto=webp&s=917f081e06ed9eca348b6ee8b197df8dfba6c6d1',
    realm: 'overworld' as const,
    type: 'plains' as const,
    coordinates: {
      x: -129,
      y: 88,
      z: 284,
    },
  },
];
