import path from "node:path";

export const cd = async (newDir) => {
    if (!newDir) {
        console.error('Error');
        return;
    }
    try {
        if (/^\w:$/.test(newDir)) {
            process.chdir(newDir + path.sep);
          } else {
            process.chdir(path.resolve(newDir));
          }
        console.log(`You are currently in ${process.cwd()}`);
    } catch (err) {
        console.error(err);
    }
}