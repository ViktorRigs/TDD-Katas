import { ScoreKeeper } from ".";

describe('ScoreKeeper', () => {
    const score = new ScoreKeeper()

    it('should start the score with "000:000"', () => {
        expect(score.getScore()).toBe("000:000")
    });

    it('should give 1 point to team A when scoreTeamA1 is called ', () => {
        score.scoreTeamA1()
        expect(score.getScore()).toBe("001:000")
    });

    it('should give 1 point to team B when scoreTeamB1 is called ', () => {
        score.scoreTeamB1()
        expect(score.getScore()).toBe("001:001")
    });

    it('should give 2 points to team A when scoreTeamA2 is called ', () => {
        score.scoreTeamA2()
        expect(score.getScore()).toBe("003:001")
    });

    it('should give 2 points to team B when scoreTeamB2 is called ', () => {
        score.scoreTeamB2()
        expect(score.getScore()).toBe("003:003")
    });

    it('should give 3 points to team A when scoreTeamA3 is called ', () => {
        score.scoreTeamA3()
        expect(score.getScore()).toBe("006:003")
    });

    it('should give 3 points to team B when scoreTeamB3 is called ', () => {
        score.scoreTeamB3()
        expect(score.getScore()).toBe("006:006")
    });
});