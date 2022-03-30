const os=require('os')

// infor about  current user

const  user =os.userInfo();
console.log(user)

// method returns the system uptime in seconds

console.log(` the system uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    platform:os.platform(),
    version :os.version()
}
console.log(currentOs)