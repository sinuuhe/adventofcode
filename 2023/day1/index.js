const digits = [
    {
        label: 'one',
        value: 1
    },
    {
        label: 'two',
        value: 2
    },
    {
        label: 'three',
        value: 3
    },
    {
        label: 'four',
        value: 4
    },
    {
        label: 'five',
        value: 5
    },
    {
        label: 'six',
        value: 6
    },
    {
        label: 'seven',
        value: 7
    },
    {
        label: 'eight',
        value: 8
    },
    {
        label: 'nine',
        value: 9
    }
];

const result = [];

const charToDigit = (word) => {
    let newWord = word;

    for(let i = 0; i < digits.length; i++) {
        const index = newWord.indexOf(digits[i].label)
        if (index !== -1) {
            newWord = newWord.replace(digits[i].label, digits[i].value)
            i = 0;
        }
    }

    return newWord;
}

for (const value of input) {
    const tuple = [];
    let combined = '';
    let sanitizedValue = charToDigit(value);

    for (const char of sanitizedValue) {
        const isNumber = !Number.isNaN(Number(char));
        if (isNumber) {
            if (!tuple[0])  {
                tuple[0] = char;
            } else {
                tuple[1] = char;
            }
        }
    }
    if (tuple[0]) combined = tuple[0]
    if (tuple[1]) {
        combined += tuple[1]
    } else {
        combined += tuple[0]
    }

    result.push(Number(combined))
}

console.log('result: ', result.reduce((previousValue, currentValue) => previousValue + currentValue, 0))