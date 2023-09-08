"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs-extra"));
const readline = __importStar(require("readline"));
const cliterFolder = 'cliter';
//TAKE INPUT FROM USER
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//CHECK IF CLITER FOLDER EXIST
function cliterExists() {
    if (!fs.existsSync(cliterFolder)) {
        console.log(`${cliterFolder} directory does not exist here!`);
    }
}
//CHECK IF DESTINATION FOLDER EXIST
const destinationExists = (destinationFolder) => {
    if (!fs.existsSync(destinationFolder)) {
        console.log(`${destinationFolder} directory does not exist here!`);
        return false;
    }
    return true;
};
//COPY CLITER FOLDER
async function copyCliter(destinationFolder) {
    fs.copy(cliterFolder, `${destinationFolder}/cliter`, (err) => {
        if (err) {
            console.error(`Error when copyng into ${destinationFolder}:`, err);
        }
        else {
            console.log('Directory succesfully copied.');
        }
    });
}
//INITIALIZE COPYNG CLITER
function syncCliter() {
    cliterExists();
    rl.question('Select the destination folder (e.g., ../boundedContext-front): ', (answer) => {
        if (destinationExists(answer.trim()) === true) {
            console.log(destinationExists);
            copyCliter(answer.trim());
            rl.close();
        }
        else {
            syncCliter();
        }
    });
}
syncCliter();
//# sourceMappingURL=index.js.map