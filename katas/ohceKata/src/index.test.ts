import ohce from ".";

describe('ohce', () => {
    it('should greet with Buenos Dias "Name"', () => {
        const result = ohce('ohce Pedro', 8)
        expect(result).toEqual('¡Buenos días Pedro!')
    });

    it('should greet with Buenos tardes "Name"', () => {
        const result = ohce('ohce Pedro', 18)
        expect(result).toEqual('¡Buenos tardes Pedro!')
    });
    
    it('should greet with Buenos noches "Name"', () => {
        const result = ohce('ohce Pedro', 22)
        expect(result).toEqual('¡Buenos noches Pedro!')
    });
    
    it('should reverse words', () => {
        const result = ohce('aloha')
        expect(result).toEqual('ahola')
    });

    it('should log "¡Bonita palabra!" if the word is a palindrome', () => {
        const result = ohce('oto')
        expect(result).toEqual('oto \n ¡Bonita palabra!')
    });

    it('should log "Adios" if the word is "Stop!"', () => {
        const result = ohce('Stop!')
        expect(result).toEqual('Adios')
    })
});