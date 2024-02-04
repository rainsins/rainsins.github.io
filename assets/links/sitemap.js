const fs = require("fs");
const data = require("./linksdata.js");
const os = require('os');
const xml2js = require('xml2js');

fs.readFile("../../sitemap.xml", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

data.forEach((e,i) => {
    fs.appendFileSync("../../sitemap.txt", `${e.url}${os.EOL}`,'utf8');
});