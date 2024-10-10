export const up = async () => {
    try {
      process.chdir('..');
      console.log(`You are currently in ${process.cwd()}`);
    } catch (err) {
      console.error(err);
    }
}