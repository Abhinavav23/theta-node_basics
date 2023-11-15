// os is a built in module available in node which can be used for OS specific resources
console.log("inside OS Module");
const osModule = require('os');

console.log("platform ",osModule.platform());
console.log("Release version", osModule.release());
console.log("Type: ", osModule.type());

console.log("Architecture", osModule.arch());

console.log("Total Mem:", osModule.totalmem()/1024/1024/1024);
console.log("Free Mem:", osModule.freemem());


console.log("CPUS:", osModule.cpus());
console.log("userInfo", osModule.userInfo());

console.log("uptime in sec:", osModule.uptime()/3600/24);

