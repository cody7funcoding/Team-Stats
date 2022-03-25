const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Markham',
      age: 22,
    },
  {
      firstName: 'Mike',
      lastName: 'Jester',
      age: 28,
  },
  {
      firstName: 'Jimmy',
      lastName: 'Falcon',
      age: 21,
    },
    
  ],
  _games: [
    {
      opponent: 'Mavericks',
      teamPoints: 41,
      opponentPoints: 38,
    },
    {
      opponent: 'Baytown',
      teamPoints: 20,
      opponentPoints: 56,
    },
   {
      opponent: 'Marsupials',
      teamPoints: 33,
      opponentPoints: 49,
    },
  ],
  get players () {
    return this._players
  },
   get games () {
     return this._games
},
   
   addPlayer(firstName, lastName, age) {
     let player = {
       firstName: firstName,
       lastName: lastName,
       age: age
     }
    
   this.players.push(player);
   },
addGame(opp, myPts, oppPts) {
 const game = {
   opponent: opp,
   teamPoints: myPts,
   opponentPoints: oppPts
};
this.games.push(game);
}
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Juno', 23, 43);
team.addGame('Bristol', 38, 36);
team.addGame('Price', 44, 43);
console.log(team.games)
 
