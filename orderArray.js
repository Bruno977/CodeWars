let array = []
for (let i = 0; i< 3; i ++){
    let write = prompt("informe um número: ")
    array.push(Number(write))
}
array.sort(function(a, b) {
  return a - b;
});
console.log(array)
