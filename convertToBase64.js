const fs = require("fs");
const path = require("path");

function encodeBase64(file) {
    const filePath = path.resolve(file);
    const fileData = fs.readFileSync(filePath);
    return `data:image/png;base64,${fileData.toString('base64')}`;
}

const base64Image = encodeBase64('./COClogo-simpleBlack.png');
console.log(base64Image);
