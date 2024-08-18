export interface MajorCredits {
  credits: number & {__brand: 'MajorCredits.credits' };
}
export interface MinorCredits {
  credits: number & {__brand: 'MinorCredits.credits'};
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  const majorCredit: MajorCredits = {
    credits: sum as number & {__brand: 'MajorCredits.credits'},
  }
  return majorCredit;
}

