import './index.css'
import { Grid, Header } from 'semantic-ui-react'
import Board from '../../features/board/board'
import Numpad from '../../features/numpad/numpad'

function App() {
  return (
    <>
      <Header as='h2' content='Sudoku Game by Duman & Assel & Sultan ' />
      <Grid>
        <Grid.Column width={8}>
          <Board/>
        </Grid.Column>
        <Grid.Column width={3}>
          <Numpad/>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default App
