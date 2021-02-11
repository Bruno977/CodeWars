var uniqueInOrder=function(iterable){
  let arrayLetters = []
  let transformWords = iterable.split("")
  for (let i = 0; i < transformWords.length; i++){
        if (transformWords[i] != transformWords[i+1]){
            arrayLetters.push(transformWords[i])
        }
  }
  console.log(arrayLetters)
}
uniqueInOrder('AAAABBBCCDAABBB')
