//ES6 JS Classes

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() { 
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

// instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User{
    bannedMessage() {
        console.log(`Your account has been banned, ${this.name}. You have violated the rules. At this time, we will commence with the
        reading of the rules. 
        
        Rule 1 - No poofters. 
        Rule 2 - No member of the faculty is to maltreat the Abos in any way at all ... if there's anyone watching. 
        Rule 3 - No poofters.
        Rule 4 - Now this time, I don't want to catch anyone not drinking. 
        Rule 5 - No poofters. 
        Rule 6 - There is NO rule 6.
        Rule 7 - No poofters.
        
        We caught you maltreating the Abos. Shame on you.`)
    }
}

let bannedBrad = new BannedUser('Brad');
bannedBrad.greet();
bannedBrad.bannedMessage();