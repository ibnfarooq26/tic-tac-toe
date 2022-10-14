import { Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function Square({ id, togglePlayer, player, hasWon }) {
  const [value, setValue] = useState(null);
  const [isLocked, lockIt] = useState(false);

  const handleSquare = () => {
    if (!hasWon) {
      if (!isLocked) {
        setValue(player);
        togglePlayer(id);
        lockIt(true);
      }
    }
  };
  return (
    <Paper
      onClick={handleSquare}
      sx={{
        color: "black",
        height: "100px",
        "&:hover": {
          backgroundColor: "brown",
          transition: "0.3s ease-in",
        },
      }}
    >
      <Typography variant="h3">{value}</Typography>
    </Paper>
  );
}

export default Square;
