import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const dirPath = path.join(__dirName, "crud");
const filePath = `${dirPath}/test.txt`;

//! Creating File
fs.writeFileSync(filePath, "Hello Bhavin Patel");

//!  Read File
fs.readFile(filePath, "utf-8", (err, item) => {
  console.log("first", item);
});

//!Update File

/* fs.appendFile(filePath, "I am a full stack developer", (err) => {
  if(!err) console.log(" File is updated");
}); */

//! Reanem file

/* fs.rename(filePath, `${dirPath}/Hello.txt`, (err) => {
  if (!err) console.log(" File is Name is Changed");
}); */

//! Delete File

fs.unlinkSync(`${dirPath}/test.txt`);
