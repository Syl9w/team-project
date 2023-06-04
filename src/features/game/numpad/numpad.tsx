import { observer } from 'mobx-react-lite'
import { Button, Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function Numpad() {

    const {gameStore}=useStore()

    const handleButtonClick= (n:number) =>{
        gameStore.fillCell(n.toString())
    }
  return (
    <Grid columns={3} style={{ marginTop: '5em' }}>
      {[1, 2, 3].map((row) => (
        <Grid.Row key={row}>
          {[1, 2, 3].map((col) => (
            <Grid.Column key={col}>
              <Button key={(row - 1) * 3 + col} content={(row - 1) * 3 + col} onClick={()=>handleButtonClick((row - 1) * 3 + col)} />
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  )
})
