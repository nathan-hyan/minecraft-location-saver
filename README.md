# Minecraft Location Saver

A proof-of-concept app for storing coordinates with screenshots and sorting them for easy access while playing in your Minecraft world.

> **Minecraft Location Saver** is a proof of concept demonstrating how to build a modern web application using **React** and **Remix.run** for server-side rendering and routing. Later when React Router 7 was introduced, this app was migrated to that framework.

----------

## Table of Contents

1.  [Features](#features)
2.  [Tech Stack](#tech-stack)
3.  [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the App](#running-the-app)
4.  [Screenshots](#screenshots)
5.  [Future Improvements](#future-improvements)
6.  [Contributing](#contributing)
7.  [License](#license)

----------

## Features

- Saving coordinates to a local database utilizing JSON-Server as the db
- Upload screenshots

----------

## Tech Stack

-   **React** – Component-based UI library.
-   **React Router 7 Framework (migrated from Remix.run)** – Full-stack web framework.
-   **Node.js** – Runtime environment.
-   **Tailwind CSS** – For styling.
-   **JSON-server**  – Local database
- **Concurrently** – For running everything, all at once

----------

## Getting Started

### Prerequisites

Before you start, ensure you have:

-   **Node.js** installed (v20 or higher).
-   **npm** or **yarn** for managing packages.

### Installation

1.  Clone the repository:

```bash
git clone https://github.com/nathan-hyan/minecraft-location-saver
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

### Running the app

Start the development app:
```bash
npm run dev
```

The app should be running at: http://localhost:5173

The database should be available at: http://localhost:3000

The available endpoints for the backend are:

- GET: /locations -- Array with all the available locations. The expected body should resemble: 
```typescript
interface Location [
  {
    id: string;
    title: string;
    description: string;
    screenshotSrc: string; // This hosts either a base64 or url link for screenshots
    realm: "overworld" | "nether" | "end",
    type: ConstructionTypes,
    coordinates: {
      x: number;
      y?: number;
      z: number;
	  }
	}
]
```

`ConstructionTypes` is an `enum` containing the following:

```typescript
export enum ConstructionTypes {
	ancient_city = 'ancient_city',
	mineshaft = 'mineshaft',
	stronghold = 'stronghold',
	trail_ruins = 'trail_ruins',
	trial_chambers = 'trial_chambers',
	buried_treasure = 'buried_treasure',
	desert_pyramid = 'desert_pyramid',
	igloo = 'igloo',
	jungle_pyramid = 'jungle_pyramid',
	pillager_outpost = 'pillager_outpost',
	swamp_hut = 'swamp_hut',
	village = 'village',
	abandoned_village = 'abandoned_village',
	woodland_mansion = 'woodland_mansion',
	ocean_ruins = 'ocean_ruins',
	shipwreck = 'shipwreck',
	ocean_monument = 'ocean_monument',
	nether_fortress = 'nether_fortress',
	bastion_remnant = 'bastion_remnant',
	nether_fossil = 'nether_fossil',
	ruined_portal = 'ruined_portal',
	end_city = 'end_city',
	monster_room = 'monster_room',
	desert_well = 'desert_well',
	coral_reef = 'coral_reef',
	amethyst_geode = 'amethyst_geode',
	fossil = 'fossil',
	exit_portal = 'exit_portal',
}
```

## Screenshots
To-do

## Future Improvements
- Implement a better database
- Add drag n drop support for screenshots
- Add "Open MC screenshots folder" for convenience
- Add unit tests for components.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue.

## License
This project is licensed under the MIT License.
