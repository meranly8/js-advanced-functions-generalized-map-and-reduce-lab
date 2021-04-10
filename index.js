function map(arry, ftn) {
    let newArry = []
    
    for (let i = 0; i < arry.length; i++){
        newArry.push(ftn(arry[i]))
    }
    return newArry
}

function reduce(arry, ftn, start) {
    let total = (!!start) ? start : arry[0]
    let i = (!!start) ? 0 : 1

    for (; i < arry.length; i++){
        total = ftn(arry[i], total)
    }
    return total
}