/**
 * You need to write a parser, which takes the ./test.json file
 * and will create a new JSON file with the name parsed.json with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the ./test.json file
 * Please NOTE, that you should omit the .html extension
 * Check yourself by running npm run test:nodejs
 */
const fs = require('fs');

const jsonParser = () => {
	const path = require('path');
	const testJson = require('./test.json');
	const arrEntries = testJson.list.entries;
	const arrOut = [];
	const url = 'http://doc.epam.com/';
	const filePath = path.join(__dirname, 'parsed.json');

	arrEntries.forEach((el) => {
		arrOut.push({docId: url.concat(el.entry.name.replace('.html', ''))});
	});
	fs.writeFileSync(filePath, JSON.stringify(arrOut));
};


module.exports = {
	jsonParser
};

