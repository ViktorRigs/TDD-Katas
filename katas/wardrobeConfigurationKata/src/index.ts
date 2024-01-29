export function wardrobeConfiguration(): string {
    const wallSize = 250;
    const elementSizes = [50, 75, 100, 120];
    let combinations: number[][] = [];

    function findCombinations(path: number[], remainingSize: number, startIndex: number) {
        if (remainingSize === 0) {
            combinations.push([...path]);
            return;
        }

        for (let i = startIndex; i < elementSizes.length; i++) {
            const nextSize = elementSizes[i];
            if (nextSize <= remainingSize) {
                path.push(nextSize);
                findCombinations(path, remainingSize - nextSize, i);
                path.pop();
            }
        }
    }

    findCombinations([], wallSize, 0);

    let result = 'Possible combinations: ';
    result += combinations.map(comb => comb.join('/')).join('; ') + ';';
    
    return result;
}

export function cheapestCombination(combinations: number[][]) {
    let cheapestPrice = 99999;
    let cheapestCombination: number[] = [];
    const elementsPrice = {
        50: 59,
        75: 62,
        100: 90,
        120: 111
    }

    combinations.forEach(comb => {
        const combPrice = comb.map(element => elementsPrice[element]).reduce((acc, curr) => acc + curr);        
        if (cheapestPrice > combPrice) {
            cheapestPrice = combPrice;
            cheapestCombination = comb;
        }
    })

    return `The cheapest combination is: ${cheapestCombination.join('/')}. The price is ${cheapestPrice}$`
}

