import inquirer from 'inquirer';
import qr from 'qr-image'; 
import fs from 'fs';
import { error } from 'console';
inquirer
  .prompt(
   [{
    "type": 'input',
    "name": 'url_name',
    "message": `Write a Url: `
}
   ]
  )
  .then((answers) => {
    var qr_svg = qr.image(answers.url_name);
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); 
    fs.writeFile('Url.txt', answers.url_name, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw error;
        } 
  });