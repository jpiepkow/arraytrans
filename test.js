var arrayTrans = require('./transform');
var testArr =
    ['basestring.arrayone.one',
        'nobase1',
        'basestring.arrayone.two',
        'nobase2',
        'basestring.arrayone.three',
        'basestring.arraytwo.one',
        'basestring.arraytwo.two',
        'basestring.arraytwo.three',
        'basestring.arraythree.one',
        'basestring.arraythree.two',
        'basestring.arraythree.three'];

console.log(arrayTrans.remove(testArr,{exclude:['basestring.arrayone','basestring.arraythree.two']},'basestring'));