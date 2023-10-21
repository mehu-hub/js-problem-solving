// Task 1 || Convert Radian to Degree

function radianToDegree(radian) {
    const degree = radian * 57.2958;
    return degree;
}

const radian = radianToDegree(16);
// console.log(radian);
//-----------------------------------

// Task 2 || check whether the given file name is a Javascript file or not

function isJavaScriptFile(name) {
    const nametype = name;
    if (nametype.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
const filename = isJavaScriptFile('me.html');
// console.log(filename);
//-----------------------------------

// Task 3 || Calculate the total oil price that I have to pay

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    const dieselPrice = diesel * dieselQuantity;
    const petrolPrice = petrol * petrolQuantity;
    const octanePrice = octane * octaneQuantity;
    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    return totalOilPrice;

}
const oilNeed = oilPrice(0, 5, 5);
// console.log(oilNeed);
//-----------------------------------

// Task 4 || Public Bus Fare 
function publicBusFare(people){
    if(typeof people === "string"){
        return "Please enter the number"
    }
    else{
        const bus = 50;
        const micro = 11
        const ticketPrice = 250;
        let busRemining = people % bus;
        let microRemining = busRemining % micro;
        let remining = microRemining
        let busFare = remining * ticketPrice;
        return busFare;
    }
}

const totalPeople = publicBusFare(1589);
// console.log(totalPeople);


//--------------------------------------

// Task 5 || is Best Friend
function isBestFriend(getFriend1, getFriend2) {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    }
    else {
        return false;
    }
}
const friend1 = { name: 'Tom', friend: 'Rock' }
const friend2 = { name: 'Rock', friend: 'jhon' }
const bestFriend = isBestFriend(friend1, friend2);
// console.log(bestFriend);

//---------------------------------------------------------------------------------------------

 
 
