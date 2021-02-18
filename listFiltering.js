function filter_list(l) {
    let array = []
    for (element of l){
        if (Number.isInteger(element)){
            array.push(element)
        }
    }
    return array
}filter_list([1,2,'aasf','1','123',123])
