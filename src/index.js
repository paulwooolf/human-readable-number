module.exports = function toReadable(number) {
    const range = String(number).split('');

    const to10 = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }

    const from10to20 = {
        '0': '',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen'
    };

    const from20to100 = {
        '0': '',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    };

    if (number === 0) {
        return 'zero';
    }

    const result = [];
    range.reverse().forEach((item, index, arr) => {
        if (index === 0 && arr[index+1] !== '1') {
            result.unshift(to10[item]);
        }

        if (index === 1 && Number(item) < 2) {
            result.unshift(from10to20[item === '0' ? '0' : [item, arr[index-1]].join('')]);
        }

        if (index === 1 && Number(item) >= 2) {
            result.unshift(from20to100[item]);
        }
        if (index === 2) {
            if (item !== '0') result.unshift('hundred');
            result.unshift(to10[item]);
        }

        if (index === 3) {
            if (item !== '0') result.unshift('hundred');
            result.unshift(to10[item]);
        }
    });
    const r = result.filter(n => n);
    return r.join(' ').trim();
}
