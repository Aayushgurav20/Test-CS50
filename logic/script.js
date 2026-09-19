// function reverseAstring(input){

//   // if(typeof input != "string"){
//   //   throw new Error("the input should be a string")
//   // }
//   let end = "";
//   for(let i = input.length-1; i >= 0; i--){
//     end += input[i]
//   }
//   return end;
// }

// console.log(reverseAstring("Madhusmita"))
// console.log(reverseAstring(1286286))

// This is a quite NON-CONFUSING way to writign the same code yet with a simpler approach but teh upper one was very much used for case sensetive for E.G number or any other value but this code is not that case sensetive //

function reverseAstring2(input){
  const arr = input.split('');
  const reversedArray = arr.reverse();
  const reversed = reversedArray.join('')
  console.log(reversed)
  // return reversed
}


reverseAstring2("Aayush")