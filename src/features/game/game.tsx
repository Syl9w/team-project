import { Grid } from "semantic-ui-react";
import Board from "./board/board";
import Numpad from "./numpad/numpad";

export default function Game() {
  return (
    <Grid>
      <Grid.Column width={8}>
        <Board />
      </Grid.Column>
      <Grid.Column width={3}>
        <Numpad />
      </Grid.Column>
    </Grid>
  )
}
