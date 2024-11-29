//Tic tac toe
let cells = document.querySelectorAll(".cell")
let board = Array(9).fill(null)
let isX = true
let winningcombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        const currentVal = isX ? "X" : "O"
        if (!cell.textContent) {
            cell.textContent = currentVal
            board[index] = currentVal

            if (success(currentVal)) {
                alert(`${currentVal} wins`)
                reset()
                return;
            }
            if (board.every(cell => cell !== null)) {
                alert("Drawww")
                reset();
                return
            }
            isX = !isX
        }
    })
})

//success 
function success(player) {
    return winningcombinations.some(combintions => {
        return combintions.every(ind => board[ind] === player)
    })
}

//reset
function reset() {
    board = Array(9).fill(null)
    cells.forEach(cell => cell.textContent = "")
    isX = true;
}