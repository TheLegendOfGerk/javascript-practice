/* REFRESHER -
data types: boolean, numerics, string
*/

const dataTypes = {
    primitives: {
        basic: {
            string: 'string',
            number: 123,
            boolean: true,
            others: {
                symbol: Symbol('symbol'),
                bigInt: BigInt(123),
            }
        },
        nonValue: {
            undefined: undefined,
            null: null,
            NaN: NaN,
        },
    },
    organizational: {
        array: [1, 2, 3],
        object: {
            objExampleOne: 'this whole big nested "dataTypes" thing is an object',
            objExampleTwo: 'You can do more complex naming of stuff, or even arrays in objects, or objects in arrays'}
    },
};
    /* coersion: when something tries to use something as something it's not...
    e.g. numeric 7 minus string '1', it will "guess" and parse it as 6 */
const strings = {
    quotes:{
    single: 'single or apostrophe',
    double: "quotation marks",
    backtick: `backticks, a.k.a. "advanced strings"`,
    },
    concatenation: {
        SimpleConcat: 'simple' + 'concatenator', // combines them together
        TemplateConcat: `complex ${dataTypes.primitives.basic.string} concatenation`, //calls reference mid-string
        },
    methods: {
        toUpperCase: 'simple'.toUpperCase(),
        toLowerCase: 'SIMPLE'.toLowerCase(),
        trim: '    simple   '.trim(),
        length: 'simple'.length,
        charAt: 'simple'.charAt(2),             //or 'simple'[2]
        charCodeAt: 'simple'.charCodeAt(5),     // returns unicode ID for the character. "e" is 101, for example
        indexOf: 'simple'.indexOf('pl'),        //finds the clause and returns the first seen character position
        lastindexOf: 'simplepl'.indexOf('pl'),  //finds the clause and returns the LAST seen charpos
        includes: 'simple'.includes('and'),     //Does it include the clause? T/F
        startsWith: 'simple'.startsWith('si'),  //Starts with? T/F
        endsWith: 'simple'.endsWith('les'),     //Ends with? etc.
        repeat: 'simple'.repeat(3),             //Repeats it.
        padStart: 'simple'.padStart(10, '_'),   //Pads beginning with _'s to make it 10 chars
        padEnd: 'simple'.padEnd(10, 'X'),       // ^ Ditto for end
        split: 'simple'.split('mp'),            //Splits it into pre-mp and post-mp
        trimStart: '    simple   '.trimStart(),
        trimEnd: '    simple   '.trimEnd(),
        trimStart: '  simple  '.trimStart(),
        trimEnd: '  simple  '.trimEnd(),
        localeCompare: 'simple'.localeCompare('simple'),
        match: 'simple'.match(/simple/),
        replace: 'simple'.replace(/simple/, 'complex'),
        search: 'simple'.search(/simple/),
        split: 'simple'.split(/simple/),
        concat: 'simple'.concat('complex'),
        codePointAt: 'simple'.codePointAt(6),
        normalize: 'simple'.normalize(),

    },
    myMethod: function() {
        console.log('this is my method')
    }
}

/* Commented out for my sanity
const popups = {
    alert: alert('HEY LISTEN'),
    confirm: confirm('Do you wish to confirm?'), //ask a yes/no question
    prompt: prompt('prompt'),
}

const answer = popups.prompt;
console.log(answer) */

const dates = {
    now: new Date(),
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

console.log(dates.now);

// Math commands, use upper case M. Fairly straightforward!
const math = {
    methods
}