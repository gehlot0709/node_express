const fs = require("fs")

fs.writeFileSync("output.txt", "hello world")
fs.appendFileSync("output.txt", "gehlot")

fs.renameSync("output.txt", "newOutput.txt")

fs.unlinkSync("newOutput.txt")

