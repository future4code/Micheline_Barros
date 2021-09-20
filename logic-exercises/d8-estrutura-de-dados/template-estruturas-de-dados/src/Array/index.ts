const labenuGroups: string[] = [
   "Newton",
   "Bouman",
   "Sagan",
   "Hamilton",
   "Julian",
   "Melo",
   "Turing",
   "Jackson",
   "Tang",
   "Dumont"
]

const customSplice = (
   array: any[],
   index: number,
   deleteCount: number = 1
): any => {
   const elem: any[] = []
   for(let i = 0; i < deleteCount; i++){
      elem.push(array[index+i])
   }

   for(let i = index; i < array.length; i++){
      array[i] = array[i+deleteCount]
   }

   array.length -= deleteCount;

   return elem

}

const removendoItem = customSplice(labenuGroups, 2, 1)

console.log({labenuGroups, removendoItem});