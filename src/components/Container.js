import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Square from "./Square";
import Winner from "./Winner";
const scores = [null, null, null, null, null, null, null, null, null];
function Container() {
  const [move, setMove] = useState(0);
  const [player, setPlayer] = useState("X");
  const [hasWon, setHasWon] = useState(null);

  const checkwinner = () => {
    let winner = null;

    scores.forEach((score, index) => {
      if (index == 0) {
        if (
          (scores[1] == score && scores[2] == score) ||
          (scores[3] == score && scores[6] == score) ||
          (scores[4] == score && scores[8] == score)
        ) {
          winner = score;
        }
      }
      if (index == 1) {
        if (scores[4] == score && scores[7] == score) winner = score;
      }
      if (index == 2) {
        if (
          (scores[5] == score && scores[8] == score) ||
          (scores[4] == score && scores[6] == score)
        ) {
          winner = score;
        }
      }
      if (index == 3) {
        if (scores[4] == score && scores[5] == score) winner = score;
      }
      if (index == 6) {
        if (scores[7] == score && scores[8] == score) winner = score;
      }
    });

    return winner;
  };

  const togglePlayer = (id) => {
    scores[id] = player;

    if (move > 3) {
      const winner = checkwinner();

      if (winner) {
        setHasWon(player);
        return;
      }
      if (move == 8) {
        setHasWon("Tie");
      }
    }
    if (player === "X") setPlayer("O");
    else setPlayer("X");
    setMove(move + 1);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.light",
          padding: "10px",
          width: "90%",
          margin: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Square
              id={0}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={1}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={2}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={3}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={4}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={5}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={6}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={7}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
          <Grid item xs={4}>
            <Square
              id={8}
              togglePlayer={(id) => togglePlayer(id)}
              player={player}
              hasWon={hasWon}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "yellow",
            width: "50%",
            height: "50px",
            margin: "auto",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Player : {player}</Typography>
        </Box>
      </Box>
      {hasWon && <Winner winner={hasWon} />}
    </>
  );
}

export default Container;
