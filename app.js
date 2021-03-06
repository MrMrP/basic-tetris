document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const Startbtn = document.querySelector('#start-button')
  const width = 10

  //The Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+3]
  ]

  const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1,width+2,width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]

  const oTetromino = [
    [0,1, width, width+1],
    [0,1, width, width+1],
    [0,1, width, width+1],
    [0,1, width, width+1]
  ]

  const iTetromino = [
    [1, width+1,width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

  const theTetrominoes = [lTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4
  let current = theTetrominoes[0][0]
  console.log(theTetrominoes)
})
