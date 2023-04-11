// From our Node Modules "lodash" package
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

// Converts the line above into one array
const newItems = _.flattenDeep(items)

console.log(newItems)