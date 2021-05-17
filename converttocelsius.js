function convertFahrToCelsius(deg){
   let parsedDeg;
   if(!Array.isArray(deg)){
      parsedDeg = parseInt(deg)
   }
   if(isNaN(parsedDeg)){
   return `${JSON.stringify(deg)} is not a valid number but a/an ${Array.isArray(deg)? "array": typeof deg}`;
   }
   let celsius = (deg - 32) / (9/5);
   let c = celsius.toFixed(4)
   return `${c}\xB0C`;
}

console.log(convertFahrToCelsius(0))

console.log(convertFahrToCelsius("0"))

console.log(convertFahrToCelsius([1,2,3]))

console.log(convertFahrToCelsius({temp: 0}))