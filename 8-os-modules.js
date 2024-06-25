const os = require('os');
// info about the current user
// console.log(os);
const user = os.userInfo();
console.log(user);
console.log(user.shell);
console.log(user.homedir);

//method returns the system uptime in seconds
console.log(`the system uptime in seconds is ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);