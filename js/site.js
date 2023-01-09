//get values from app page
//start OR controller function
function getValues() {
    //get values from app page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Validating our inputs
    //parsing to Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //if inputs are numbers
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers function
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers function
        displayNumbers(numbers);
    }
    //if inputs are not numbers
    else {
        alert("You must enter integers for Even-Handed to work!");
    }    
}

//generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(start, end) {
    //create empty array
    let numbers = [];
    
    //generating numbers with for loop using start and end values
    for(let index = start; index <= end; index++) {
        //adding current number to array
        numbers.push(index);
    }
    return numbers;
}

//display numbers and make even numbers bold
//display OR view functions
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}

