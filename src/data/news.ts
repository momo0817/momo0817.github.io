export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "September 8th",
    title: "Paper accepted to AACL-IJCNLP 2026 Findings",
    description: "Our paper was accepted to AACL-IJCNLP 2026 Findings.",
  },
  {
    date: "August 20th",
    title: "Paper accepted to EMNLP 2026 Main",
    description: "Our paper was accepted to EMNLP 2026 Main.",
  },
];
