/**
 * Created by rush on 8/8/16.
 */

function FizzBuzz () {


    this.doIt = function(start, end) {
        for (var i = start; i <= end; i++) {
            if (i % 15 == 0) {
                console.log("FizzBuzz");
            } else if (i % 3 == 0) {
                console.log("Fizz");
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

var fizzbuzz = new FizzBuzz();

var result = fizzbuzz.doIt(1, 10);

console.log(result);