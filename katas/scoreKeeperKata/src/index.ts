export class ScoreKeeper {
	private scoreTeamA: number = 0;
	private scoreTeamB: number = 0;

	public getScore(): string {
		const formatScore = (score: number) => score.toString().padStart(3, '0');
		return `${formatScore(this.scoreTeamA)}:${formatScore(this.scoreTeamB)}`;
	}

	public scoreTeamA1(): void {
		this.scoreTeamA++;
	}

	public scoreTeamA2(): void {
		this.scoreTeamA +=2;
	}

	public scoreTeamA3(): void {
		this.scoreTeamA +=3;
	}

	public scoreTeamB1(): void {
		this.scoreTeamB++;
	}

	public scoreTeamB2(): void {
		this.scoreTeamB +=2;
	}

	public scoreTeamB3(): void {
		this.scoreTeamB +=3;
	}
}
