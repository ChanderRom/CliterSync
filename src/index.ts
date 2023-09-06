import * as fs from 'fs'

const cliter: string = 'cliter'

function cliterExists(): void {
  if ( fs.existsSync(cliter) ) {
    console.log( `${cliter} directory exists` )
  } else {
    console.log( `${cliter} directory does not exists` )
  } 
}

cliterExists()