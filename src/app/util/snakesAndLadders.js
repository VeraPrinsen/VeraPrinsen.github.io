const SNAKES_OR_LADDERS = new Map([
    [1,1],
    [2,2],
    [3,11],
    [4,4],
    [5,5],
    [6,17],
    [7,7],
    [8,8],
    [9,18],
    [10,12],
    [11,11],
    [12,12],
    [13,13],
    [14,4],
    [15,15],
    [16,16],
    [17,17],
    [18,18],
    [19,8],
    [20,20],
    [21,21],
    [22,20],
    [23,23],
    [24,16],
    [25,25]
])

const play = () => {
    let playerLocation = 1
    while (playerLocation < 25) {
        console.log('Player location: ' + playerLocation)
        let diceRoll = Math.floor(Math.random() * 5) + 1
        console.log('Diceroll: ' + diceRoll)
        playerLocation = playerLocation + diceRoll
        let snakeOrLadderLocation =  SNAKES_OR_LADDERS.get(playerLocation)
        if (playerLocation !== snakeOrLadderLocation) {
            console.log('Player location: ' + playerLocation)
            if (snakeOrLadderLocation > playerLocation) {
                console.log('LADDER :)')
            } else {
                console.log('SNAKE :(')
            }
            playerLocation = snakeOrLadderLocation
        }
    }
    console.log('YOU WON!')
}

export default play