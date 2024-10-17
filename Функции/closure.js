function addByX(a) {
    
    function newOne(b) {
       return a + b
   }
   return newOne;
}

const addByTwo = addByX(2);
console.log(addByTwo(3)); // 5
console.log(addByTwo(5)); // 7

const addByFour = addByX(4);
console.log(addByFour(3)); // 7
console.log(addByFour(5)); // 9