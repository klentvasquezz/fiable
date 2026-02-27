"use client";

import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { parseGridDirection } from "../helpers/parseGridDirection";
import { directionRotation, Direction } from "../common/constants";

interface GridDirectionProps {
  position: string;
}

export default function GridDirection({ position }: GridDirectionProps) {
  const parsed = parseGridDirection(position);

  return (
    <Table sx={{ border: "1px solid #ccc", width: "300px", height: "300px" }}>
      <TableBody>
        {[...Array(5)].map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {[...Array(5)].map((_, colIndex) => {
              const yPos = 4 - rowIndex; 
              const xPos = colIndex;
              const isObjectHere =
                parsed && parsed.x === xPos && parsed.y === yPos;

              return (
                <TableCell
                  key={colIndex}
                  sx={{
                    border: "1px solid #ccc",
                    textAlign: "center",
                    width: "20%",
                    height: "20%",
                  }}
                >
                  {isObjectHere && (
                    <ArrowUpwardIcon
                      sx={{
                        transform: `rotate(${directionRotation[parsed.direction]}deg)`,
                        color: "red",
                      }}
                    />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
