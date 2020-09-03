// declaring variables
let firstArray = [8,9,2,1,4,5,6];
let sum = 15;

// bubble sort method for firstArray
for (var y = 0; y< firstArray.length; y++){
    for (var x = 0; x < firstArray.length; x++){
        if (firstArray[x] > firstArray[x+1]){
            let temp = firstArray[x];
            firstArray[x] = firstArray[x+1];
            firstArray[x+1] = temp;
        }
    }
}

//function to find three numbers in firstArray Equal to the sum integer
function ArrayAndSum(array, sum){
    //declaring variables
    let done = false;
    let result =[];
    let firstElement = array[0],
        secondElement,
        lastElement;

    //method to determine which numbers are equal to the sum    
    for (var i = 1; i < array.length - 1; i++){ //loopping around the array and check the values

        if((array[0]+array[i]+array[i+1]) === sum) 
            done = true;    

        if (done == true){ // assigning the values to variables
            secondElement = array[i];
            lastElement = array[i+1]; 
        } 
        break;
    }

    //pushing the values to an array to return the values as n array
    if (done == true){
        result.push(firstElement);
        result.push(secondElement);
        result.push(lastElement);
    }else if (done == false){
        result.push(-1);
    }

    return result;
}

// calling the function to process an array and display the result
let finalArray = ArrayAndSum(firstArray, sum);
console.log(finalArray);
