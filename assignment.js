// feet to mile conversion start here
function feetToMile(feet) {
    if(feet < 0){
        return 'distance cannot be negative'
    }
    var mile = feet / 5280;     // As we know 1 mile = 5280 feet
    return mile;
}
// example feet to mile conversion
var result = feetToMile(350);
console.log('Mile: ', result)




// Wood Calculator Start Here
function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed <0){
        return "Input quantity can not be zero or less"
    }
    else{
        return (chair * 1 + table * 3 + bed * 5);
    }
}

// Example for wood Calculator
var totalWood = woodCalculator(2, 2, 2); 
console.log("Total Wood will need: ", totalWood);




// brick Calculator start here
function brickCalculator(floor) {
    var totalBrick = 0;
    if (floor < 0) {
        return "Floor should not be a negative value";
    }

    if(floor > 0){
        if (floor >= 1 && floor <= 10) {
            totalBrick = (floor * 15) * 1000; 
        }
        else if (floor >= 11 && floor <= 20) {
            totalBrick = (10 * 15) * 1000; 
            totalBrick = totalBrick + ((floor - 10) * 12) * 1000;
        }
        else {
            totalBrick = (10 * 15) * 1000; 
            totalBrick = totalBrick + (10 * 12) * 1000; 
            totalBrick = totalBrick + ((floor - 20) * 10) * 1000;
        }
    }
    return totalBrick;
}
// example brick calculator
var totalBrick = brickCalculator(2);
console.log("Total Bricks will need: ", totalBrick);



// Find Tiny Friend start here
function tinyFriend(friends) {
    var shortNames = Infinity;
    var tinyName = '';
    if (friends == undefined || friends.length == 0) {
        return "friends name can not empty or 0.";
    }

    for (i = 0; i < friends.length; i++) {
        if (friends[i].length < shortNames) {
            tinyName = friends[i];
            shortNames = friends[i].length;
        }
    }
    return tinyName;
}
// example tinyFrind 
var tinyName = tinyFriend(["Kawsersk", "Sumonsk", "pHero", "Jhankar"]);
console.log("Tiny Friend is: ", tinyName);