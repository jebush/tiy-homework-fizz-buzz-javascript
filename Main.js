/**
 * Created by rush on 8/8/16.
 */

function FizzBuzz (start, end) {
    this.start = start;
    this.end = end;


    this.doIt = function() {
        for (var i = this.start; i <= this.end; i++) {
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

var fizzbuzz = new FizzBuzz(1, 100);

var result = fizzbuzz.doIt();

console.log(result);