import { EOL, cpus, homedir, userInfo, arch } from "node:os";

export const os = async (command) => {
    switch (command) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case '--cpus':
            console.log(`Total CPUs: ${cpus().length}`);
            cpus().forEach((cpu, index) => {
                const clockRate = (cpu.speed / 1000).toFixed(1);
                console.log(`CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${clockRate} GHz`);
            });
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case '--homedir':
            console.log(homedir());
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case '--username':
            console.log(userInfo().username);
            console.log(`You are currently in ${process.cwd()}`);
            break;
        case '--architecture':
            console.log(arch());
            console.log(`You are currently in ${process.cwd()}`);
            break;
        default:
            console.error('Invalid input');
            console.log(`You are currently in ${process.cwd()}`);
    }
};