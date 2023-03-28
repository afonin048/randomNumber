let arrA = []
let arrB = []
let n = +prompt('Enter length', 5)
toLabel:
for (let i = 0; i < n; i++){
    arrA.push(Math.floor(Math.random()* 100))
    for (let j = 2; j<arrA[i]; j++){
        if(arrA[i] % j == 0){
            continue toLabel;
        }
    }
    arrB[i]=arrA[i]
}
document.write(`arrA = ${arrA.join(`, `)} <br><br>`)
arrB = arrB.filter(Boolean)
document.write(`arrB = ${arrB.join(`, `)}<br><br>`)

minValue = maxValue = arrB[0]
for (let i = 0; i < arrB.length; i++){
    
     if(arrB[i] < minValue){
     minValue = arrB[i] 
    }
    if(arrB[i] > maxValue){
         maxValue = arrB[i] 
        }
}

document.write(`Min Value of arrB = ${minValue}<br>
Max Value of arrB = ${maxValue
}`)


