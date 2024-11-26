const splashText: Record<string, string[]> = {
  '/': [
    'Multiple worlds, multiple places!',
    'Hundred of blocks travelled!',
    'Even creepers love a sunny day!',
    "Blocks and dreams, it's all yours!",
    'Redstone engineers, assemble!',
    'Beware of chickens with hidden motives!',
  ],
  '/create': [
    'Never stop exploring!',
    'Every block placed is a story told!',
    "Glad to see you're still expanding!",
    'Blueprints? Who needs them?',
    'Building dreams, one block at a time!',
  ],
};

export const getSplashText = (pathname: string) => {
  const validSplashContainer = ['/', '/create'];

  if (!validSplashContainer.includes(pathname)) {
    return splashText['/'][(Math.random() * splashText['/'].length) | 0];
  }

  return splashText[pathname][
    (Math.random() * splashText[pathname].length) | 0
  ];
};
