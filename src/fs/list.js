import fs from 'fs';

export const list = async () => {
    try {
    const currentDir = process.cwd();
    const data = await fs.promises.readdir(currentDir, { withFileTypes: true });
    
    const files = [];
    const folders = [];
    
    data.forEach((item) => {
        if (item.isDirectory()) {
            folders.push({ Name: item.name, Type: "directory" })
        } else {
            files.push({ Name: item.name, Type: "file" })
        }
    });

    folders.sort((a, b) => a.Name.localeCompare(b.Name));
    files.sort((a, b) => a.Name.localeCompare(b.Name));

    const result = [...folders, ...files];

    console.table(result);
    console.log(`You are currently in ${process.cwd()}`);
  } catch (err) {
    console.error(err);
  }
}