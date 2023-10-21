// 1. Feet to Inch
function feetToInch(feet) {
    let inches = feet * 12;
    return inches
}
const myFeet = feetToInch(5);
// console.log(myFeet);

//--------------------------------------------------------------------1

// 2. Centimeter to meter
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}

const myCentimeter = centimeterToMeter(5530);
// console.log(myCentimeter);

//--------------------------------------------------------------------2

// 3. Paper Requirments
function paperRequirments(paper1, paper2, paper3) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    //---------------
    const book1Need = paper1 * book1;
    const book2Need = paper2 * book2;
    const book3Need = paper3 * book3;
    //---------------
    const totalPapersNeed = book1Need + book2Need + book3Need;
    return totalPapersNeed;
}

const myBookNeeds = paperRequirments(0, 5, 10)
// console.log(myBookNeeds);

//--------------------------------------------------------------------3

// 4. Best Friend
function bestFriend(longlenth) {
    let findBestfriend = longlenth[0];
    for (let i = 0; i < longlenth.length; i++) {
        const index = i;
        let element = longlenth[index]
        if (findBestfriend.length < element.length) {
            findBestfriend = element;
        }
    }
    return findBestfriend;

}
const friend = ['Mehedi Hasan', 'Omar Faruk', 'Seikh Mufassir Hazari', 'Odu Kerani'];
const isLongName = bestFriend(friend)
// console.log('Largest Friend Name is:', isLongName);

//--------------------------------------------------------------------4

// 5. Only Positive Value

function positiveValue(numbers){
    let newNum = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        let number = numbers[index];
        if(number < 0){
            break
        }
        newNum.push(numbers[i])
    }
    return newNum;
}
const myNumber = [45, 15, 25, 455, 30, -20, 22, 12];
const getNumber = positiveValue(myNumber);
console.log(getNumber);

//--------------------------------------------------------------------5