import { Container, Grid, Image } from 'semantic-ui-react'
import Rules from './rules'

export default function HomePage() {
  return (
    <Grid columns={2} padded centered>
      <Grid.Column width={6}>
        <Image src='/assets/controller.png' alt='controller' className='controller50' />
      </Grid.Column>
      <Grid.Column width={6}>
        <Container fluid>
          <h1 className='text-header'>Rules</h1>
          <p>
            Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 “squares”
            (made up of 3 x 3 spaces). Each row, column and square (9 spaces each) needs to be
            filled out with the numbers 1-9, without repeating any numbers within the row, column or
            square. Does it sound complicated? As you can see from the image below of an actual
            Sudoku grid, each Sudoku grid comes with a few spaces already filled in; the more spaces
            filled in, the easier the game – the more difficult Sudoku puzzles have very few spaces
            that are already filled in.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column width={12}>
        <Rules />
      </Grid.Column>
    </Grid>
  )
}
