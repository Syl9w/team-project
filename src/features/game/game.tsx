import { Grid } from "semantic-ui-react";
import Board from "./board/board";
import Numpad from "./numpad/numpad";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function Game() {
  const {gameStore} = useStore()

  useEffect(()=>{
    gameStore.fillBoard();
  }, [gameStore])

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
})
