function solution(str){
    let array = []
   let separateString = str.split("")
   for(let i = 0; i < separateString.length; i++){
       array.push(separateString[i] + separateString[i+1])
       i++
   }
   console.log(array)
}solution('abc')
