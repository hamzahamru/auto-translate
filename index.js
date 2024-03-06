const readlineSync = require('readline-sync');
const translate = require('translate-google');
const autofill = require('@hamzahamru/autofill-typeform');
const spafind = require('@hamzahamru/spafind');
const translates = (text, from, to) => new Promise((resolve, reject) => {
    translate(text, {
        from: from,
        to: to
    }).then(res => {
        resolve(res)
    }).catch(err => {
        reject(err)
    });
});

(async () => {
    const from = readlineSync.question('Translate from (ex. en/id) : ');
    const to = readlineSync.question('Translate to (ex. en/id) : ');
    while (true) {
    const text = readlineSync.question('Input text to translate : ');
    const translate = await translates(text, from, to);
    console.log(`Output text to translate: ${translate}`);
    console.log('')
    }
})();
