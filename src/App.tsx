import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const initial = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, -1, -9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, -1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
]

function App() {
  const [board, setBoard] = useState(initial)
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Sudoku Game by Duman & Assel & Sultan </h3>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => (
              <tr key={rindex}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, cindex) => (
                  <td key={rindex + cindex}>
                    <input value={board[rindex][cindex]} className='cell-input' />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  )
}

export default App
