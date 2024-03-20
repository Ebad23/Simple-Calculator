//get values from input fields

const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let noOfPeople = Number(numberOfPeople.innerText);
let getTotalbyPersons = 0;
let total = 0;

//calculate bill

const calculateBill = () => {
    //convert bill field to number
    total = Number(billTotalInput.value) + Number(tipInput.value);
    //get total by persons
    getTotalbyPersons = total / noOfPeople;
    //display result of total
    perPersonTotal.innerText = '$' + getTotalbyPersons.toFixed(2);
}

//get increase people
const increasePeople = () => {
    //increment the number of people by 1
    noOfPeople = noOfPeople + 1;
    numberOfPeople.innerText = noOfPeople;
    //get total by persons
    getTotalbyPersons = total / noOfPeople;
     //display result of total
    perPersonTotal.innerText = '$' + getTotalbyPersons.toFixed(2);

}

const decreasePeople = () => {
    //if number of people is 1 then return
    if (noOfPeople == 1)
    {
        return;
    }
    //decrement the number of people by 1
    noOfPeople = noOfPeople - 1;
    numberOfPeople.innerText = noOfPeople;
    //get total by persons
    getTotalbyPersons = total / noOfPeople;
     //display result of total
    perPersonTotal.innerText = '$' + getTotalbyPersons.toFixed(2);
}