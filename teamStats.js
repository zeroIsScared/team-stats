const team = {
_players: [
    { firstName: 'Pablo', lastName: 'Sanchez', age: 11}, 
    { firstName: 'Antonio', lastName: 'Dattoli', age: 13},
    {firstName: 'Ray', lastName: 'Amares', age: 14}],
_games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Boston', teamPoints: 35, opponentPoints: 25},
    {opponent: 'Sherif', teamPoints: 50, opponentPoints: 37}],


get players() {

    return  this._players;
},

get games() {

    return this._games;
},

addPlayer(firstName, lastName, age) {
  const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
  };

  this._players.push(player);
},

addGame(name, teamPoints, opponentPoints) {
    const game = {
        opponent: name,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    };

    this._games.push(game);
}
};

team.addPlayer('Steph', 'Curry',  28);
team.addPlayer('Lisa', 'Leslie',  44);
team.addPlayer('Bugs', 'Bunny', 76);



console.log(team.players);

team.addGame('Liverpool', 51, 21);
team.addGame('Manchester', 42, 32);
team.addGame('Milan', 48, 45);

console.log(team._games);