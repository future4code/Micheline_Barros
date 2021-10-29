const testAnagramString = (s: string, t: string) => {
   let stringS: any = {}

   if(s.length !== t.length){
      return false;
   }

   for(let char of s){
      stringS[char] = (stringS[char] || 0) + 1;
   }

   for(let char of t){
      if (!stringS[char]){
         stringS--;
         return false;
      }
      
   }

   return true
}


console.log(testAnagramString('anagrama', 'nagarama'))

//OU

function testAnagramStringSimplificada(s: string, t: string) {
	return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(testAnagramStringSimplificada('anagrama', 'nagarama'))