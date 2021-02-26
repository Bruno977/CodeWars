function solution(str){
    let array = []
   let separateString = str.split("")
   for(let i = 0; i < separateString.length; i++){
       array.push(separateString[i] + separateString[i+1])
       i++
     if(separateString[i] === undefined){
       array.pop()
       array.push((separateString[i -1]) + "_")
     }
   }
   console.log(array)
}solution('abcdefg')
