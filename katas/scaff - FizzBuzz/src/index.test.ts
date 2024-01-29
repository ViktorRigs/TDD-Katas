import fizzBuzz from ".";

describe('fizzBuzz', () => {
    it('should return a number in an array', () => {
        expect(fizzBuzz(1)).toEqual(['1']);
    });
    it('should return Fizz for 3', () => {
        expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    });
    it('should return Buzz for 5', () => {
        expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4','Buzz']);
    });
    it('should return Fizz for multiples of 3 and Buzz for multiples of 5', () => {
        expect(fizzBuzz(6)).toEqual(['1', '2', 'Fizz', '4','Buzz', 'Fizz']);
    });
    it('should return FizzBuzz for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']);
    });
});