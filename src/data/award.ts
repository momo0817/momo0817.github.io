export interface Award {
  date: string;
  title: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  link?: string;
}

export const awardData: Award[] = [
  {
    date: "July 2026",
    title: "第35回博士後期課程学生発表会 プレゼンテーション賞",
    titleEn: "The 35th Doctoral Program Student Presentation Award",
  },
    {
    date: "September 2024",
    title: "SB Intuitions株式会社賞（YANS2024）",
    titleEn: "SB Intuitions Corporation Award (YANS2024)",
    link:"https://yans.anlp.jp/entry/award"
  },
    {
    date: "September 2024",
    title: "サイバーエージェント賞 （YANS2024）",
    titleEn: "CyberAgent Award (YANS2024)",
    link:"https://yans.anlp.jp/entry/award"
  },
];

export function getEnglishAwards(): Award[] {
  return awardData.map((award) => ({
    ...award,
    title: award.titleEn || award.title,
    description: award.descriptionEn || award.description,
  }));
}
