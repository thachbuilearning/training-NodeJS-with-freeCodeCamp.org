// console.log(__dirname);
// console.log(__filename);
// setInterval(() => {
//     console.log(`hello World`)
// }, 1000
// )

const names = require(`./name`)
const sayHi = require(`./utility`)
const data = require(`./alternative`)
console.log(data)
sayHi(`Sussan`)
sayHi(names.john)
sayHi(names.peter)
require(`./mind-grenade`)

const os = require(`os`)
const user = os.userInfo()
console.log(user)
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)