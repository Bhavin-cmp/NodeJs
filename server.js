import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const dirPath = path.join(__dirName, "Files");

//!Create Multiple File
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(
    `${dirPath}/Hello${i}.txt`,
    `Hello There Bhavin Patel This is File Number ${i}`
  );
}

//!Getting List of available File
/* fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    console.log("Files List", file);
  });
});
 */
