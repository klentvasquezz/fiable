export const validDirections = [
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST",
];

export type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export const directionRotation: Record<Direction, number> = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};