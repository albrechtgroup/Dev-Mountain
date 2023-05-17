const canWin = n => {
    // none of the legal moves are under two
    if (n < 2) {
        return false
    }

    let legalMoves = [2, 3, 5]

    // if canWin is false for the opponent, then we win
    legalMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })

    // if we can't win from above, we lose
    return false
}