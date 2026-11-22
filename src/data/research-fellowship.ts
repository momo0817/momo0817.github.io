export interface Research_Fellowship {
  date: string;
  title: string;
  titleEn?: string;  
  description?: string;
  descriptionEn?: string;
  link?: string;
}

export const researchFellowshipData: Research_Fellowship[] = [
  {
    date: "November 2026",
    title: "言語処理学会 海外留学支援",
    titleEn: "Scholarship for Study abroad by the Association for Natural Language Processing",
  },
  {
    date: "September 2026 - February 2027",
    title: "Swiss Government Excellence Scholarships 2026-2027 (Research Scholarships)",
    titleEn: "Swiss Government Excellence Scholarships 2026-2027 (Research Scholarships Main Candidate)",
  },
  {
    date: "June 2025 - Present",
    title: "遺贈を活用した若手研究者支援策",
    titleEn: "Support Program for Young Researchers Utilizing Bequests",
  },
  {
    date: "April 2025 - Present",
    title: "BOOST Program for next-generation AI areas",
    description: "※ BOOST: Broadening Opportunities for Outstanding young researchers and doctoral students in STrategic areas Research Fellow (Subsidized Project by the JST (Japan Science and Technology Agency))"
  },
  {
    date: "April 2024 - Present",
    title: "WISE Program for AI Electronics (AIE)",
    description: "Research Fellow (Subsidized Project by the Ministry of Education, Culture, Sports, Science and Technology)"
  },
  {
    date: "April 2023 - March 2025",
    title: "JASSO Scholarship",
    description: "Half Repayment Exemption due to outstanding achievements (特に優れた業績による半額返済免除)",
    descriptionEn: "Half Repayment Exemption due to outstanding achievements",
  },
];
