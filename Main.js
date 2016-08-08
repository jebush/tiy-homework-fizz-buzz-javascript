/**
 * Created by rush on 8/8/16.
 */

function doIt(start, end){
    for (var i = start; i <= end; i= i + 1){
        if (i % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }

    }
}

doIt(1,100);