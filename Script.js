function padString(originString,resultStringLength,symbol,toStart) {
    const diff = resultStringLength - originString.length;
     
     if (diff > 0) {
       const symbols = symbol.repeat(diff);
       return toStart ? symbols + originString : originString + symbols;
     } else {
       return originString;
     }
   }
   console.log(padString('hello',8,'*'));
   console.log(padString('hello',8,'$',true));