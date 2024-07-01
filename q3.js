function primeNumber(a) {
    var b = 0;
    for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
            b++;
        }
        if (b > 2) {
            return 'NO';
        }
    }
    return 'YES';
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
// กันตพงษ์ เตมีศักดิ์ 660612138
