// declaring variables
let groupOfNumbers = [8,9,2,1,4,5,6];
let standardDeviation = 0 ,temp = 0;

//To calculate standard deviation
function CalculateStandardDeviation(array){
    // Declaring neccessary variables
    let mean = 0, squaredMean = 0, result = 0;
    let refinedArray = [];

    //To calculate the mean
    for (var x = 0; x < array.length; x++){
        mean += array[x];
    }
    mean /= array.length;

    // subtracting the numbers from Mean and squaring them 
    for (var y = 0; y < array.length; y++){
        temp = array[y] - mean;
        temp = temp * temp;
        refinedArray.push(temp); // pushed the numbers to an array
    }

    //Getting the mean of the new array of numbers
    for (var z = 0; z < refinedArray.length; z++){
        squaredMean += refinedArray[z];
    }
    squaredMean /= refinedArray.length;

    //Calculating the standard deviation by finding the squareroot of the mean
    result = Math.sqrt(squaredMean);
    return result;
}

// calling the function to process an array and display the result
standardDeviation = console.log(CalculateStandardDeviation(groupOfNumbers));
