class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){
        let playerNames = [];

        footballPlayers.forEach(element => {
            let[name, age, playerValue] = element.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            let currentPlayer = this.invitedPlayers.find(x => x.name === name);
            if(!currentPlayer){
                this.invitedPlayers.push({name,age,playerValue});
            }
            else if(currentPlayer.playerValue < playerValue){
                currentPlayer.playerValue = playerValue;
            }
            if(!playerNames.includes(name)){
                playerNames.push(name);
            }
        });
        return `You successfully invite ${playerNames.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let currentPlayer = this.invitedPlayers.find(x => x.name === name);
        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if(playerOffer <currentPlayer.playerValue){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        currentPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
    ageLimit(name, age){
        let currentPlayer = this.invitedPlayers.find(x => x.name === name);
        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let ageDifference = age - currentPlayer.age;
        if(ageDifference <= 0){
            return `${name} is above age limit!`
        }
        if(ageDifference < 5){
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        }
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
    transferWindowResult(){
        let buffer = [];
        buffer.push('Players list:');
        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sortedPlayers.forEach(el => {
            buffer.push(`Player ${el.name}-${el.playerValue}`);
        })
        return buffer.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
//----------------------------------
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
//----------------------------------
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
//----------------------------------
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
//----------------------------------





