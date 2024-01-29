import { StringCalculator } from "./stringCalculator";

describe('stringCalculator', () => {
    const calculator = new StringCalculator();

    it('should return a 0 if string is empty', () => {
        expect(calculator.add('')).toBe(0);
    });

    it('should return a 1 if string is 1', () => {
        expect(calculator.add('1')).toBe(1);
    });

    it('should return a 3 if string is 1,2', () => {
        expect(calculator.add('1,2')).toBe(3);
    });

    it('should return a 6 if string is 1,2,3', () => {
        expect(calculator.add('1,2,3')).toBe(6);
    });

    it('should return the result if there are new lines between inputs', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

    it('should support different delimeters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
    });

    it('should throw an exception if the number is negative', () => {
        expect(() => { calculator.add('//[;]\n1;-2') }).toThrow('negatives not allowed - -2')
    });

    it('should throw an exception if the number is negative', () => {
        expect(() => { calculator.add('//[;]\n1;-2;-3;-4') }).toThrow('negatives not allowed - -2;-3;-4')
    });

    it('should ignore numbers bigger than 1000', () => {
        expect(calculator.add('//[;]\n1002;2')).toBe(2);
    });

    it('should support delimeters of any length', () => {
        expect(calculator.add('//[***]\n1***2***3')).toBe(6);
    });

    it('should support multiple delimeters of any length', () => {
        expect(calculator.add('//[*][%%][&&&&&]\n1*2%%3&&&&&5')).toBe(11);
    });
});