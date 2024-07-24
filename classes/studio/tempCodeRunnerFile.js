console.log(`It took ${testCounter} tests to reach Reserve.`);

while(gladGladiator.average() < 90) {
    gladGladiator.addScore(100);
    tesCounter++
}
console.log(`It took ${testCounter} tests to reach Accepted.`);