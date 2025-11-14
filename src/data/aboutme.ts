export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  researchInterest?: string;
}

export const aboutMe: AboutMe = {
  name: "Momoka Furuhashi",
  title: "1st year Ph.D. Student in Computer Science",
  institution: "Tohoku University",
  // Note that links work in the description
  description:
    "I'm a first-year PhD student at <a href='https://www.nlp.ecei.tohoku.ac.jp/about-us/labs/'>TohokuNLP Group</a>, <a href='https://www.is.tohoku.ac.jp/en/'>Tohoku University</a>.",
  email: "furuhashi.momoka.p4@dc.tohoku.ac.jp",
  researchInterest: "My research interests include applying natural language processing techniques to generate feedback based on students’ answers and to automatically evaluation of generative tasks.", // ← 例
  imageUrl:"/about_me.JPG",
  googleScholarUrl: "https://scholar.google.co.jp/citations?view_op=list_works&hl=ja&authuser=3&user=NT4C1ZUAAAAJ",
  githubUsername: "momo0817",
  linkedinUsername: "-",
  twitterUsername: "tohoku_nlp_mmk",
  // blogUrl: "https://",
  // cvUrl: "http://localhost:3000/cv",
  // cvUrl:"https://momo0817.github.io/app/cv",
  cvUrl: "/cv",
  institutionUrl: "https://www.tohoku.ac.jp",
  // altName: "",
  // secretDescription: "I like dogs.",
};
