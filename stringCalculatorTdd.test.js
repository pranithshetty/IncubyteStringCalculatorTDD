const stringCalculatorTdd = require('./stringCalculatorTdd')
// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6
test('Input is empty string', ()=>{
    expect(stringCalculatorTdd('')).toBe(0)
})

test('input is number', ()=>{
    expect(stringCalculatorTdd(0)).toBe('Input is not a string')
})

test('single number', () => {
    expect(stringCalculatorTdd("1")).toBe(1);
});
