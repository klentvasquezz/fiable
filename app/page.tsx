"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import GridDirection from "./components/GridDirection";
import { validDirections } from "./common/constants";

export default function Home() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [direction, setDirection] = useState<string>("NORTH");
  const [position, setPosition] = useState<string>("0,0 NORTH");

  const [xError, setXError] = useState<string>("");
  const [yError, setYError] = useState<string>("");

  const handleSubmit = () => {
    let valid = true;

    if (x < 0 || x > 4) {
      setXError("X must be between 0 and 4");
      valid = false;
    } else {
      setXError("");
    }

    if (y < 0 || y > 4) {
      setYError("Y must be between 0 and 4");
      valid = false;
    } else {
      setYError("");
    }

    if (valid) {
      setPosition(`${x},${y} ${direction}`);
    }
  };

  return (
    <Container sx={{ mt: 5, ml: 0 }}>
      <Typography variant="h4" gutterBottom>
        FIABLE ASSESSMENT
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        {/* FORM */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "200px" }}>
          <TextField
            label="X"
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            error={!!xError}
            helperText={xError}
          />
          <TextField
            label="Y"
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            error={!!yError}
            helperText={yError}
          />
          <TextField
            select
            label="Direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            {validDirections.map((dir) => (
              <MenuItem key={dir} value={dir}>
                {dir}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>

        <GridDirection position={position} />
      </Box>
    </Container>
  );
}
