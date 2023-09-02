function gameObject(){
    const obj = {
        home:{
            teamName:'Brooklyn Nets',
            colors:['Black', 'White'],
            players: {
                "Alan Aderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evens":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }

            }
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "Desagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }

            }
        }
    }
    return obj
}

function numPointScored(playerName){
    let game = gameObject()
    for(let gameKey in game){
        let teamPlayers = game[gameKey].players
        for (let playerObj in teamPlayers){
            if(playerObj === playerName){
               return teamPlayers[playerName].points
            }
        }
    }

}

function shoeSize(playerName){
    let game = gameObject()
    for (let gameKey in game){
        let teamPlayer = game[gameKey].players
        for (let playerObj in teamPlayer){
            if(playerObj === playerName){
                return teamPlayer[playerName].shoe
            }
        }
    }
}

function teamColors(teamName){
    //returns the team color array
    let game = gameObject()
    for(let gameKey in game){
        let teamNameFromObj = game[gameKey].teamName
        if(teamNameFromObj === teamName){
            return game[gameKey].colors
        }
      

    }
}

function teamNames(){
    let game = gameObject()
    let teamNames = []
    for(let gameKey in game){
        teamNames.push(game[gameKey].teamName)
    }
     return teamNames
}

function playerNumbers(teamName){
    let game = gameObject()
    let teamJerseyNumbers = []
    for(let gameKey in game){
        let teamNameFromObj = game[gameKey].teamName
        if(teamNameFromObj === teamName){
            let playersObj = game[gameKey].players
            for (let player in playersObj){
                teamJerseyNumbers.push(playersObj[player].number)
            }

        }
    }
   return teamJerseyNumbers
}

function playerStats(playerName){
    let game = gameObject()
    for(gameKey in game){
        let teamPlayers = game[gameKey].players
        for(let player in teamPlayers)
        if(player === playerName){
            return teamPlayers[playerName]
        }
    }
}

function bigShoeRebounds(){
    //find the player with the largest shoes size
    let game = gameObject()
    let highPlayerRebound = 0;
    for(let gameKey in game){
        let playersObj = game[gameKey].players
        for(let player in playersObj){
            let playerRebounds = playersObj[player].rebounds
            if(playerRebounds > highPlayerRebound){
                highPlayerRebound = playersObj[player].rebounds
            }
        }
    }
    //return that players number of rebound
    return highPlayerRebound
    
}


function mostPointsScored(){
    let game = gameObject()
    let highestPointsScored = 0;
    for(let gameKey in game){
        let teamPlayers = game[gameKey].players
        for(let player in teamPlayers){
            let playerPoints = teamPlayers[player].points
            if(playerPoints > highestPointsScored){
                highestPointsScored = teamPlayers[player].points
            }
    

        }
    }
    return highestPointsScored
}

function winningTeam(){
    let game = gameObject()
    let homeTeamScore=0
    let awayTeamScore=0
    let homePlayers = game.home.players
    let awayPlayers = game.away.players
    //total points for home team
    for(let player in homePlayers){
        let playerPoints = homePlayers[player].points
        homeTeamScore = homeTeamScore + playerPoints
    }
    //total points for away team
    for(let player in awayPlayers){
        let playerPoints = awayPlayers[player].points
        awayTeamScore = awayTeamScore + playerPoints
    }
   
    if(homeTeamScore > awayTeamScore){
        return homeTeamScore
    }else if(awayTeamScore > homeTeamScore){
        return awayTeamScore
    }
    
}

function playerWithLongestName (){
    let game = gameObject()
    let nameOfPlayer = ''
    for(let gameKey in game){
        let playerNames = game[gameKey].players
       for (let player in playerNames){
        let countName = 0
        let playerNameLength = player.length - 1
        if(playerNameLength > countName){
            countName = playerNameLength
            nameOfPlayer=player
        }
       }

    }
    return nameOfPlayer
}

function doesLongNameStealATon(){
    const longestPlayerName = playerWithLongestName()
    let game = gameObject()
    let longestPlayerNameSteals;
    let playerWithTheMostSteals = 0
    for(let gameKey in game){
        let players = game[gameKey].players
        for(let player in players){
            let currentPlayerSteals = players[player].steals
            //longestPlayerName steals
            if(player === longestPlayerName){
                longestPlayerNameSteals = players[longestPlayerName].steals 
            }
            //player with the most steals
            if( currentPlayerSteals > playerWithTheMostSteals  ){
                playerWithTheMostSteals = players[player].steals
               
            }
        }
        
    }
    //compare longestPlayer steals to player with the most steals
    if(longestPlayerNameSteals >= playerWithTheMostSteals ){
        return true
    }else{
       return false
    }
}

