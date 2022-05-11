function returnsEvenValues(array){
    let evenNumber = []
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
        evenNumber.push(array[i]);
    }
}
console.log(evenNumber);
}

let array = [1,2,3,4,5,6,7,8,9];

returnsEvenValues(array);