
function add(a, b) {
  return a + b;
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];

const firstInteger = parseInt(firstArg);
const secondInteger = parseInt(secondArg);

console.log(add(firstInteger, secondInteger));