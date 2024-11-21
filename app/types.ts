export interface Location {
  id?: string; // TODO: Make this not optional
  title: string;
  description: string;
  screenshotSrc: string;
  realm: Realms;
  type: ConstructionTypes;
  coordinates: Coordinates;
  createdAt?: string;
}

export interface Coordinates {
  x: number;
  y?: number;
  z: number;
}

export enum Realms {
  overworld = 'overworld',
  nether = 'nether',
  end = 'end',
}

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
