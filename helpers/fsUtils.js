const fs = require('fs');

function readFromFile (destination) {
  return new Promise((resolve, reject) => {
    fs.readFile(destination, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

function writeToFile (destination,content) {
    fs.writeFile(destination, JSON.stringify(content),
    (err)=> {
        if (err) {
            console.log(err);
        } else {
            console.log('Data written succesfully')
        }
    })
};

function readAndAppend (content,file) {
    fs.readFile(file, 'utf8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file,parsedData);
    }
    });
}



module.exports = {readFromFile, writeToFile, readAndAppend}