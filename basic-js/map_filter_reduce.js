// MAP 

const arr = [2, 3, 4]

function double(x) {
    return x * 2;
}

const output = arr.map(double);

/**
 alternative:

 const output = arr.map(function binary(x){
    return x.toString(2);
 });

 2nd alternative:

 const output = arr.map((x)=> x.toString(2));
 */


// console.log(output);

// REDUCE

function reduce() {
    const arr = [5, 1, 3, 2, 6]
//reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).

    // in reducer, first value is a function,
    // second value is any initial value which we need to pass inside acc (we gave 0 as initial value)

    // acc => what we have to get out of the array
    // curr => current iteration value
    const sumOfAllItems = arr.reduce(function (acc, curr) {
        acc = acc + curr;
        return acc;
    }, 0)
    console.log(output);
}

reduce()