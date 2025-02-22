export const calculateMatchScore = (userSkills: string[], jobSkills: string[]): number => {
    const matchedSkills = jobSkills?.filter(skill => userSkills?.includes(skill));
    return Math.round((matchedSkills?.length / jobSkills?.length) * 100);
  };
  