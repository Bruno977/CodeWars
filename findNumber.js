function findUniq(arr) {
  for (let i = 0; i < arr.length; i++){
      if (arr[i] != arr[i + 1]){
          return (arr[i + 1])
      }
  }
}

findUniq([ 1, 1, 1, 2, 1, 1 ])
