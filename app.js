/*
npm - global command, comes with node
npm --version

local dependency - use it only in this particular project
npm i <packageName>

global dependency - use it in any project
npm insatll -g <packageName>

package.json - manifest file => stores imp info about project/package
manual approach (create package.json in the root, create properties etc)
npm init (step by step,press enter to skip)
npm init -y (everything default)
*/

const _ = require('lodash');

const items = [1,[2,[3,[4,[5]]]]]

const newItems = _.flatMapDeep(items)
console.log(newItems)