import axios from 'axios'
import { makeAutoObservable } from 'mobx'

export default class GameStore {
  board = Array(9).fill(Array(9).fill(''))
  selectedCellX = 0
  selectedCellY = 0
  incorrectCells = new Set()
  correspondingCells = new Set()
  constructor() {
    makeAutoObservable(this)
  }

  fillBoard = async () => {
    var board = await (await axios.get('http://localhost:5000/api/board')).data
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if(board[j][i]!==0){
          this.selectCell(j,i)
          this.fillCell(board[j][i])
        }
      }
      
    }
  }

  selectCell = (x: number, y: number) => {
    this.selectedCellX = x
    this.selectedCellY = y
    this.correspondingCells.clear()
  }

  fillCell = (n: string) => {
    
    if (
      (this.selectedCellX >= 0 || this.selectedCellX < 9) &&
      (this.selectedCellY >= 0 || this.selectedCellY < 9)
    ) {
      if (this.isValidMove(n)) {
        this.incorrectCells.delete(`${this.selectedCellX}-${this.selectedCellY}`)
        this.correspondingCells.clear()
      } else {
        this.incorrectCells.add(`${this.selectedCellX}-${this.selectedCellY}`)
        this.getCorrespondingCells(n)
      }
      this.board[this.selectedCellX][this.selectedCellY] = n
    }
  }

  getCorrespondingCells = (n: string) => {
    for (let i = 0; i < 9; i++) {
      // check corresponding row
      if (i !== this.selectedCellY && this.board[this.selectedCellX][i] === n)
        this.correspondingCells.add(`${this.selectedCellX}-${i}`)

      // check corresponding column
      if (i !== this.selectedCellX && this.board[i][this.selectedCellY] === n)
        this.correspondingCells.add(`${i}-${this.selectedCellY}`)
    }

    // Check if number is present in 3x3 section
    const sectionTopRows = Math.floor(this.selectedCellX / 3) * 3
    const sectionTopCols = Math.floor(this.selectedCellY / 3) * 3

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[sectionTopRows + i][sectionTopCols + j] === n) {
          this.correspondingCells.add(`${i}-${j}`)
        }
      }
    }
  }

  getClassName = (x:number,y:number):string => {
    const coordinates = `${x}-${y}`
    if(this.incorrectCells.has(coordinates) || this.correspondingCells.has(coordinates))
      return 'mistake'

    return ''
  }

  isValidMove = (number: string): boolean => {
    const row = this.selectedCellX
    const col = this.selectedCellY

    // Check if number is already present in row or column
    for (let i = 0; i < 9; i++) {
      if (this.board[row][i] === number || this.board[i][col] === number) {
        return false
      }
    }

    // Check if number is present in 3x3 section
    const sectionTopRows = Math.floor(row / 3) * 3
    const sectionTopCols = Math.floor(col / 3) * 3

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[sectionTopRows + i][sectionTopCols + j] === number) {
          return false
        }
      }
    }

    return true
  }
}
