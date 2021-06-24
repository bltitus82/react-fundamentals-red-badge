class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User";
    };

    //Method 1
    greet() {
        console.log(`Welcome back ${this.name}!`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

// Instance of user class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// instance of TrialUser class
let trialAnonDude = new TrialUser(`TrialUser`);
trialAnonDude.trialEnding();

class BronzeLevelUser extends User {
    constructor(name, password, ccinfo) {
        super(name, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo() {
        console.log(this.name, this.password, this.type, this.ccinfo);
    }
};

let bronzeGuy = new BronzeLevelUser('BronzerBro', 'bronze1234', '1234567890123456');
bronzeGuy.greet();
bronzeGuy.status();
bronzeGuy.getInfo();
console.log(bronzeGuy);