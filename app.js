const _=require('lodash');

const items= [1,[3,[4,5]],[8],9,7];
const newItems= _.flattenDeep(items)
console.log(newItems)