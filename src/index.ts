import * as fs from 'fs-extra';
import * as readline from 'readline';

const cliterFolder: string = 'cliter';

//TAKE INPUT FROM USER
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//CHECK IF CLITER FOLDER EXIST
function cliterExists(): void {
  if (!fs.existsSync(cliterFolder)) {
    console.log(`${cliterFolder} directory does not exist here!`)
  }
}

//CHECK IF DESTINATION FOLDER EXIST
const destinationExists = (destinationFolder: string): boolean => {
  if (!fs.existsSync(destinationFolder)) {
    console.log(`${destinationFolder} directory does not exist here!`);
    return false;
  }
  return true;
};

//COPY CLITER FOLDER
async function copyCliter(destinationFolder: string) {
  fs.copy(cliterFolder, `${destinationFolder}/cliter`, (err) => {
    if (err) {
      console.error(`Error when copyng into ${destinationFolder}:`, err)
    } else {
      console.log('Directory succesfully copied.')
    }
  });
}

//INITIALIZE COPYNG CLITER
function syncCliter() {
  cliterExists();
  rl.question('Select the destination folder (e.g., ../boundedContext-front): ', (answer) => {
    if(destinationExists(answer.trim()) === true) {
      copyCliter(answer.trim())
      rl.close()
    } else {
      syncCliter()
    }
  });
}

syncCliter()