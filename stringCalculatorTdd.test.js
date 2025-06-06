const stringCalculatorTdd = require('./stringCalculatorTdd')

test('Input is empty string', ()=>{
    expect(stringCalculatorTdd('')).toBe(0)
})

test('input is number', ()=>{
    expect(stringCalculatorTdd(0)).toBe('Input is not a string')
})

test('single number', () => {
    expect(stringCalculatorTdd("1")).toBe(1);
});

test('2 numbers with delimitor ,', ()=>{
    expect(stringCalculatorTdd("1,2")).toBe(3)
})

test('2 numbers with delimitor "\n"', ()=>{
    expect(stringCalculatorTdd("1\n4")).toBe(5)
})

test('returns correct sum for 3 numbers with commas', () => {
    expect(stringCalculatorTdd("1,2,3")).toBe(6);
});

test('handles newlinevonly delimiter', () => {
    expect(stringCalculatorTdd("4\n5\n6")).toBe(15);
});

test('handles mixture of comma and newline delimiters', () => {
    expect(stringCalculatorTdd("1\n2,3")).toBe(6);
});

test('custom delimiter ";" works correctly', () => {
    expect(stringCalculatorTdd("//;\n1;2")).toBe(3);
});

test('custom delimiter with newlines and commas', () => {
    expect(stringCalculatorTdd("//#\n1#2\n3,4")).toBe(10);
});

test('throws for negative numbers', () => {
    expect(() => stringCalculatorTdd("2,-4,3,-5")).toThrow("Negatives not allowed -4,-5");
});
test('throws error for one negative number', () => {
    expect(() => stringCalculatorTdd("10,-3")).toThrow("Negatives not allowed -3");
});

test('returns error for non-string input (number)', () => {
    expect(stringCalculatorTdd(42)).toBe("Input is not a string");
});

test('returns error for non-string input (object)', () => {
    expect(stringCalculatorTdd({})).toBe("Input is not a string");
});

test('handles single zero', () => {
    expect(stringCalculatorTdd("0")).toBe(0);
});

test('handles number greater than 1000', () => {
    expect(stringCalculatorTdd("1001")).toBe(0);
});

test('handles sum with greater than 1000', () => {
    expect(stringCalculatorTdd("2,1001")).toBe(2);
});