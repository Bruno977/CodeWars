function findOutlier(integers){
    let arrayPair = []
    let arrayOdd = []
  for (element of integers){
      if (element % 2 === 0){
          arrayPair.push(element)
      }else{
          arrayOdd.push(element)
      }
  }
  if (arrayPair.length === 1){
      return(Number(arrayPair))
  }else{
    return (Number(arrayOdd))    
  }
}findOutlier([160, 3, 1719, 19, 11, 13, -21])
