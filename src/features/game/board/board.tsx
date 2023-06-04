import { observer } from 'mobx-react-lite'
import { useStore } from '../../../app/stores/store'
import { ChangeEvent } from 'react'

export default observer(function Board() {
  const { gameStore } = useStore()

  const handleCellClick = (x: number, y: number) => {
    gameStore.selectCell(x, y)
  }

  const handleValueUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    gameStore.fillCell(value)
  }

  return (
    <table>
      <tbody>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => (
          <tr key={rindex} className={(row + 1) % 3 === 0 ? 'bold-border-bottom' : ''}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => (
              <td key={rindex*9 + cindex} className={(col + 1) % 3 === 0 ? 'bold-border-right' : ''}>
                <input
                  onClick={() => handleCellClick(rindex, cindex)}
                  value={gameStore.board[rindex][cindex]}
                  className='cell-input'
                  onChange={handleValueUpdate}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
})
