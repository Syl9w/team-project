import { makeAutoObservable } from 'mobx'

export default class GameStore {
  board = Array(9).fill(Array(9).fill(''))
  selectedCellX = 0
  selectedCellY = 0
  constructor() {
    makeAutoObservable(this)
  }

  selectCell = (x: number, y: number) => {
    this.selectedCellX = x
    this.selectedCellY = y
  }

  fillCell = (n:string) => {
    if (
      (this.selectedCellX >= 0 || this.selectedCellX < 9) &&
      (this.selectedCellY >= 0 || this.selectedCellY < 9)
    )
      this.board[this.selectedCellX][this.selectedCellY] = n

    console.log(this.board)
  }
}
