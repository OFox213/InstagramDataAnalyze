const fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const jsonFile = fs.readFileSync('./datasetYoutube.json', 'utf8');
const jsonData = JSON.parse(jsonFile);

var resultJson = [];
for(var i = 0; i<jsonData.length; i++){
    resultJson.push({id:jsonData[i].channelId, subscriberCount:jsonData[i].subscriberCount, totalVideoLikes:jsonData[i].videoLikeCount});
}

console.log(resultJson)

const csvFromArrayOfObjects = convertArrayToCSV(resultJson);

fs.writeFile('./result.csv', csvFromArrayOfObjects, 'utf8', function(err) {
    console.log(err);
});