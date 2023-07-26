import inquirer from 'inquirer';
import { type } from 'os';
import qr from "qr-image";
import fs from"fs";
inquirer
  .prompt([
    {name:"URL",
     message:"Type your Url to get the qr",
     },
  ])
  .then((answers) => {
    const url= answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('generate.png '));
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });