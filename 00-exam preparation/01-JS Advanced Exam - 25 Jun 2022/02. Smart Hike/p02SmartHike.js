class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals[peak]) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
        return `${peak} has already been added to your goals`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (!this.resources) {
            throw new Error("You don't have enough resources to start the hike");
        }
        if (this.resources - time * 10 < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }
    showRecord(criteria) {
        if (!this.listOfHikes.length) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'all') {
            let buffer = [];
            buffer.push('All hiking records:');
            this.listOfHikes.forEach(el => {
                buffer.push(`${this.username} hiked ${el.peak} for ${el.time} hours`);
            })
            return buffer.join('\n');
        }

        let bestHike = this.listOfHikes.filter(a => a.difficultyLevel === criteria).sort((a, b) => a.time - b.time)[0];
        if (bestHike) {
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
        else {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
    }
}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
//--------------------------------------------
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));
//--------------------------------------------
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));
//--------------------------------------------
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));
//--------------------------------------------
// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// debugger
// console.log(user.showRecord('all'));
//--------------------------------------------