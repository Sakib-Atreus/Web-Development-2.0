class Instructor {
    // name;
    // designation = 'Web Course Instructor'
    // team = 'Web Team'
    // location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const mir = new Instructor('Sakib', 'Dhaka');
console.log(mir);
mir.startSupportSession('9.00');
mir.createQuiz(60);