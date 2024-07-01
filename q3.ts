function primeNumber(a) {
  let b=0;
  for(let i=1;i<=a;i++){
    if(a%i==0){
      b++;
    }
    if(b>2){
      return 'NO';
    }
  }
  return 'YES';
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

// กันตพงษ์ เตมีศักดิ์ 660612138