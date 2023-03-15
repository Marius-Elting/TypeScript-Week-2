"use strict";
const player1 = {
    Name: "Frank",
    lastLogin: new Date(),
    ID: 1,
    Email: "Frank@gmail.com",
    PlayedGame: {
        GameName: "Ananas",
        HighScore: 90,
    }
};
const getEmail = ({ Email }) => {
    console.log(Email);
};
getEmail(player1);
const player2 = {
    Name: "Peter",
    lastLogin: new Date(),
    ID: 1,
    Email: "peter@gmail.com",
    PlayedGame: {
        GameName: "Flappy Duck",
        HighScore: 124,
    }
};
const player3 = {
    Name: "Handy",
    lastLogin: new Date(),
    ID: 1,
    Email: "Handy@gmail.com",
    PlayedGame: {
        GameName: "Flappy Duck",
        HighScore: 59,
    }
};
const evaluateWinner = (player1, player2) => {
    if (player1.PlayedGame.GameName !== player2.PlayedGame.GameName) {
        return 0;
    }
    if (player1.PlayedGame.HighScore > player2.PlayedGame.HighScore) {
        return 1;
    }
    if (player1.PlayedGame.HighScore < player2.PlayedGame.HighScore) {
        return -1;
    }
    if (player1.PlayedGame.HighScore === player2.PlayedGame.HighScore) {
        return 0;
    }
};
evaluateWinner(player2, player3);
const leaderBorad = (player, game) => {
    const sortet = player.filter(play => play.GameName === game).sort((a, b) => (a.HighScore > b.HighScore ? -1 : 1));
    console.log(sortet);
    return [sortet];
};
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
], "Flappy Duck");
const leaderboardAdvanced = (players) => {
    console.log(players);
    const data = [...players].map((player) => {
        return {
            Spielname: player.PlayedGame.GameName,
            Score: player.PlayedGame.HighScore,
            Player: player.Name
        };
    });
    console.log(data);
    const sortet = [...data].sort((a, b) => (a.Score > b.Score ? -1 : 1));
    console.log(sortet);
    return sortet;
};
leaderboardAdvanced([player1, player2, player3]);
