"use strict";

function BinarioADecimal(num) {
  var content = num

  var createArray = content.split('')
  var count = 0
  var sum = 0

  for(var i = createArray.length-1; i >= 0; i--) {
      var operation = Math.pow(2, count)*createArray[i]
      sum += operation

      count = count + 1
  }

  return sum
  // tu codigo aca
  // let res = 0
  // let array = []

  // for (let i = 0; i < num.length; i++){
  //   array.unshift(num[i])
  // }
  // for (let i = 0; i < array.length; i++){
  //   res = res + Math.pow(2,i) * array[i]
  // }
  // return res
}


function DecimalABinario(num) {
  var content2 = num
  var createArray2 = []

  for(var i = content2; i >= 1; i = i / 2) {

      //operacion = (i / 2) 
      var roundedFloor = Math.floor(i)
      var moduleOperation = roundedFloor % 2
      createArray2.unshift(moduleOperation)
  }
  var conCat = createArray2.toString().replaceAll(',','')
  return conCat
  // tu codigo aca
  //   let array = []
  //   let str = ""
  //   for (let i = 0; i < 9999; i++){
  //     if (num < 1){
  //       break;
  //     }
  //     let a = num % 2;
  //     array.unshift(a);
  //     num = Math.floor(num / 2)
  
  // }
  //   for (let i = 0; i < array.length; i++){
  //     str = str + array[i]
  // }
  // return str
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
