const { convert, toMoney } = require('./convert')

test('converts cotacao 4 e quantidade 4', () => {
    expect(convert(4, 4)).toBe(16)
})

test('converts cotacao 0 e quantidade 4', () => {
    expect(convert(0, 4)).toBe(0)
})

test('to money converts float', () => {
    expect(toMoney(2)).toBe('2.00')
})

test('to money converts string', () => {
    expect(toMoney('2')).toBe('2.00')
})