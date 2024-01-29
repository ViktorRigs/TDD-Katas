import { cheapestCombination, wardrobeConfiguration } from ".";

describe('wardrobeConfiguration', () => {
    it('should return a string', () => {
        expect(typeof wardrobeConfiguration()).toBe("string")
    })

    it('should return a combination', () => {
        expect(wardrobeConfiguration()).toStrictEqual(expect.stringContaining('50/100/100'))
    })

    it('should return some combinations', () => {
        expect(wardrobeConfiguration()).toStrictEqual(expect.stringContaining('75/75/100;'))
        expect(wardrobeConfiguration()).toStrictEqual(expect.stringContaining('50/100/100;'))
    })

    it('should return all combinations ordered in a string', () => {
        expect(wardrobeConfiguration()).toStrictEqual(expect.stringContaining(
            'Possible combinations: 50/50/50/50/50; 50/50/50/100; 50/50/75/75; 50/100/100; 75/75/100;'
        ))
    });
});

describe('cheapestCombination', () => {
    const combinations = [
        [ 50, 50, 50, 50, 50 ],
        [ 50, 50, 50, 100 ],
        [ 50, 50, 75, 75 ],
        [ 50, 100, 100 ],
        [ 75, 75, 100 ]
      ]

    it('should return a string', () => {
        expect(typeof cheapestCombination(combinations)).toBe("string")
    });

    it('should return the right combination', () => {
        expect(cheapestCombination(combinations)).toStrictEqual(expect.stringContaining('The cheapest combination is: 75/75/100'))
    });

    it('should return the right combination with its price', () => {
        expect(cheapestCombination(combinations)).toBe('The cheapest combination is: 75/75/100. The price is 214$')
    });
});