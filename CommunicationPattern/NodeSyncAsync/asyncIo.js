import fs from 'fs'

console.log("1")

fs.readFile("out.txt",(err, data)=>console.log(data.toString()))

console.log("2")
