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
  const [board, setBoard] = useState(getDeepCopy(initial))

  function getDeepCopy(arr: number[][]) {
    return JSON.parse(JSON.stringify(arr))
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) {
    var value = parseInt(e.target.value) || -1
    var grid = getDeepCopy(board)
    if (value === -1 || value >= 1 || value <= 9) grid[row][col] = value
    setBoard(grid)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Sudoku Game by Duman & Assel & Sultan </h3>
        <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => (
              <tr key={rindex} className={(row + 1) % 3 === 0 ? 'bold-border-bottom' : ''}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => (
                  <td
                    key={rindex + cindex}
                    className={(col + 1) % 3 === 0 ? 'bold-border-right' : ''}
                  >
                    <input
                      onChange={(e) => onInputChange(e, rindex, cindex)}
                      value={board[row][col] === -1 ? '' : board[rindex][cindex]}
                      className='cell-input'
                      disabled={initial[row][col] !== -1}
                    />
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
