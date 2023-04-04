import fs from 'fs'

console.log("1")
const res = fs.readFileSync("out.txt")
console.log("file: "+ res)
console.log("2")
console.log("Finished Executing")
