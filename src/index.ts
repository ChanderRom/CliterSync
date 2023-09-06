import * as fs from 'fs-extra'

const cliterFolder: string = 'cliter'
const backFolder: string = './library-back'
const frontFolder: string = '../library-front'


function cliterExists(): void {
  if ( !fs.existsSync(cliterFolder) ) {
    console.log( `${cliterFolder} directory does not exists` )
  } 
}

async function copyCliter() {
  fs.copy(cliterFolder, `${frontFolder}/cliter`, (err) => {
    if (err) {
      console.error('Error al copiar el directorio:', err);
    } else {
      console.log('Directorio copiado con éxito.');
    }
  }
)}


function syncCliter() {
  cliterExists()
  copyCliter()
}

syncCliter()