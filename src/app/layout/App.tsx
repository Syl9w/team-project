
import { Header } from 'semantic-ui-react'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header as='h2' content='Sudoku Game by Duman & Assel & Sultan ' />
     <Outlet/>
    </>
  )
}

export default App
