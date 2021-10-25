const os = require('os');

//info about the current user
const user = os.userInfo()
console.log(`User info : \n ${user}`);

// checking the uptime :
console.log(`System uptime is ${os.uptime} secons`)

// system details:

const currentOS ={
    name: os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
};

console.log(currentOS);
