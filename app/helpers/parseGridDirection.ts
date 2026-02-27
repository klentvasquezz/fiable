import { validDirections, Direction } from "../common/constants";

export interface ParsedGridDirection {
  x: number;
  y: number;
  direction: Direction;
}

export function parseGridDirection(input: string): ParsedGridDirection | null {
  const trimmedInput = input.trim();
  const parts = trimmedInput.split(" ");

  // 2 parts: ["1,2", "NORTH"]
  if (parts.length !== 2) {
    return null;
  }

  const coordinates = parts[0]; // "0,0"
  const direction = parts[1].toUpperCase(); 

  const coordParts = coordinates.split(",");
  if (coordParts.length !== 2) {
    return null;
  }

  const x = Number(coordParts[0]);
  const y = Number(coordParts[1]);

  // coords should be from 0-4 only
  if (
    isNaN(x) || 
    isNaN(y) || 
    (x < 0 || x > 4) || 
    (y < 0 || y > 4)
  ) {
    return null;
  }

  if (!validDirections.includes(direction)) {
    return null;
  }

  return {
    x: x,
    y: y,
    direction: direction as Direction,
  };
}
