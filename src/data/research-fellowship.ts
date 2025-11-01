export interface Research_Fellowship {
  date: string;
  title: string;
  description?: string;
  link?: string;
}

export const researchFellowshipData: Research_Fellowship[] = [
  {
    date: "June 2025 - Present",
    title: "遺贈を活用した若手研究者支援策",
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
    description: "Half Repayment Exemption due to outstanding achievements (特に優れた業績による半額返済免除)"
  },
];
