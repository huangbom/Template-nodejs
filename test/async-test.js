
// const fs = require('fs');

// a simple async function:
// module.exports = async () => {
//     let expression = await fs.readFile('./data.txt', 'utf-8');
//     let fn = new Function('return ' + expression);
//     let r = fn();
//     console.log(`Calculate: ${expression} = ${r}`);
//     return r;
// };

const assert = require('assert');
// const hello = require('../hello');

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});