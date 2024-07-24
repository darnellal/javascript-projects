//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore)
    }
    average(){
        let average = 0
        for (let i = 0; this.scores.length; i++){
            average += this.scores[i];
        }
        average = average/this.scores.length;
        return Math.round(average*10)/10;
    }
    status(){
        let status = "unknown";
        let averageScore = this.average();
        if (averageScore >= 90){
            status = "Accepted!"
        } else if (averageScore >= 80) {
            status = "Reserve"
        } else if (averagescore >= 70) {
            status = "Probationary"
        } else {
            status = "Rejected"
        }
        return status;
    }
}


let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let gladGladiator = new CrewCandidate("Glad Gladiator", 225, [75, 78, 62])

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGladiator);

bubbaBear.addScore(83)
console.log(bubbaBear)

console.log(merryMaltese.average());

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`)

console.log(gladGladiator.average());

let testCounter = 0
while(gladGladiator.average() < 80) {
    gladGladiator.addScore(100);
    tesCounter++
}

console.log(`It took ${testCounter} tests to reach Reserve.`);

while(gladGladiator.average() < 90) {
    gladGladiator.addScore(100);
    tesCounter++
}
console.log(`It took ${testCounter} tests to reach Accepted.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.