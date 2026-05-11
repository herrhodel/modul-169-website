import { replaceInFile } from "replace-in-file";
import modulConfig from "../../modul.config.js";

const results = await replaceInFile({
  files: "./slides/*.md",
  from: /\(..\/docs/g,
  to: `(${modulConfig.url}/${modulConfig.repoName}/docs`,
});

const results2 = await replaceInFile({
  files: "./slides/*.md",
  from: /\(\/docs/g,
  to: `(${modulConfig.url}/${modulConfig.repoName}/docs`,
});

console.log("Processed slides", results, results2);
