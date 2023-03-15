type Player = {
    Name: string;
    lastLogin: Date;
    ID: number;
    Email: string;
    PlayedGame: PlayedGame
}

type Admin = {
    Name: string;
    ID: number;
    Email: string;
    EmployeedId: number
}

type PlayedGame = {
    GameName: string;
    HighScore: number;
}

const player1: Player = {
    Name: "Frank",
    lastLogin: new Date(),
    ID: 1,
    Email: "Frank@gmail.com",
    PlayedGame: {
        GameName: "Ananas",
        HighScore: 90,
    }
}


const getEmail = ({ Email }: { Email: Player["Email"] } | { Email: Admin["Email"] }) => {
    console.log(Email)
}

getEmail(player1)


const player2: Player = {
    Name: "Peter",
    lastLogin: new Date(),
    ID: 1,
    Email: "peter@gmail.com",
    PlayedGame: {
        GameName: "Flappy Duck",
        HighScore: 124,
    }
}

const player3: Player = {
    Name: "Handy",
    lastLogin: new Date(),
    ID: 1,
    Email: "Handy@gmail.com",
    PlayedGame: {
        GameName: "Flappy Duck",
        HighScore: 59,
    }
}
const player4: Player = {
    Name: "Merkel",
    lastLogin: new Date(),
    ID: 1,
    Email: "Merkel@gmail.com",
    PlayedGame: {
        GameName: "Flappy Ananas",
        HighScore: 59,
    }
}
const player5: Player = {
    Name: "Merit",
    lastLogin: new Date(),
    ID: 1,
    Email: "Merit@gmail.com",
    PlayedGame: {
        GameName: "Flappy Duck",
        HighScore: 1000,
    }
}



const evaluateWinner = (player1: Player, player2: Player) => {
    if (player1.PlayedGame.GameName !== player2.PlayedGame.GameName) {
        return 0
    }

    if (player1.PlayedGame.HighScore > player2.PlayedGame.HighScore) {
        return 1
    }
    if (player1.PlayedGame.HighScore < player2.PlayedGame.HighScore) {
        return -1
    }
    if (player1.PlayedGame.HighScore === player2.PlayedGame.HighScore) {
        return 0
    }
}

evaluateWinner(player2, player3)

const leaderBorad = (player: Array<PlayedGame>, game: string): Array<Object> => {
    const sortet = player.filter(play => play.GameName === game).sort((a, b) => (a.HighScore > b.HighScore ? -1 : 1))
    console.log(sortet)
    return [sortet]
}

leaderBorad([{
    GameName: "Flappy Duck",
    HighScore: 1,
},
{
    GameName: "Flappy Duck",
    HighScore: 5,
},
{
    GameName: "Flappy Duck",
    HighScore: 10,
},
{
    GameName: "a Duck",
    HighScore: 10,
}
], "Flappy Duck")


// ÜBUNG 7

type HighScore = {
    Spielname: string;
    Score: number;
    Player: Player
};

type LeaderBoard = Array<HighScore>


// Die nachfolgnde Aufgabe habe ich erst falsch verstanden und gelöst, die richtige lösung folgt darunter
const leaderboardAdvancedWeird = (players: Array<Player>): LeaderBoard => {
    const data = [...players].map((player): HighScore => {
        return {
            Spielname: player.PlayedGame.GameName,
            Score: player.PlayedGame.HighScore,
            Player: player
        }
    })
    const sortet: LeaderBoard = [...data].sort((a, b) => (a.Score > b.Score ? -1 : 1))
    return sortet
}

leaderboardAdvancedWeird([player1, player2, player3])



const leaderboardAdvanced = (players: Array<Player>): LeaderBoard => {
    const data = [...players].map((player): HighScore => {
        return {
            Spielname: player.PlayedGame.GameName,
            Score: player.PlayedGame.HighScore,
            Player: player
        }
    })
    let games: Array<String> = []
    data.forEach((player) => {
        if (!games.includes(player.Spielname)) {
            games.push(player.Spielname)
        }
    })
    let leaderboard: LeaderBoard = []
    games.forEach(game => {
        let a = data.filter(play => play.Spielname === game).sort((a, b) => (a.Score > b.Score ? -1 : 1))[0]
        leaderboard.push(a)
    })
    leaderboard.sort((a, b) => (a.Score > b.Score ? -1 : 1))
    return leaderboard
}

leaderboardAdvanced([player1, player2, player3, player4, player5])

