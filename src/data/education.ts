export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "April 2025—Present",
    institution: "Tohoku University",
    degree: "D.S. in Information Science",
    advisor: "Kentaro Inui, Yuichiro Matsubayashi",
  },
  {
    year: "April 2023—March 2025",
    institution: "Tohoku University",
    degree: "M.S. in Information Science",
    advisor: "Kentaro Inui, Yuichiro Matsubayashi",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
   {
    year: "April 2019—March 2023",
    institution: "Tsuda University",
    degree: "B.E. in Mathematics",
    advisor: "Toshio Mikami",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
