interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits';
  }
  
  interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, __brand: 'MajorCredits' };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, __brand: 'MinorCredits' };
  }
  
  const mathMajor: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
  const physicsMajor: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
  const englishMinor: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
  const historyMinor: MinorCredits = { credits: 3, __brand: 'MinorCredits' };
  
  const totalMajorCredits = sumMajorCredits(mathMajor, physicsMajor);
  console.log('Total major credits:', totalMajorCredits.credits);
  
  const totalMinorCredits = sumMinorCredits(englishMinor, historyMinor);
  console.log('Total minor credits:', totalMinorCredits.credits);