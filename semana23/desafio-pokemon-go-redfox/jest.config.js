module.exports = {
   roots: ["<rootDir>/tests"],
   transform: {
      "^.+\\.tsx?$": "ts-jest",
   },
   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
   verbose: true,
 };
 
 module.exports = config;
 
 // Or async function
 module.exports = async () => {
   return {
     verbose: true,
   };
 };