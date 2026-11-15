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
  title: "2nd year Ph.D. Student in Information Science",
  institution: "Tohoku University",
  // Note that links work in the description
  description:
    "I'm a 2nd-year PhD student at <a href='https://www.nlp.ecei.tohoku.ac.jp/about-us/labs/'>TohokuNLP Group</a>, <a href='https://www.is.tohoku.ac.jp/en/'>Tohoku University</a>.",
  email: "furuhashi.momoka.p4@dc.tohoku.ac.jp",
  researchInterest:"Human Simulation, User Modeling, Human Preference Modeling, and LLM Evaluation.\nMy research focuses on modeling and simulating human judgments using LLMs, particularly investigating individual differences and the limitations of LLM-based user simulations. I am interested in developing more reliable approaches to modeling user preferences and behaviors in human-AI interactions.",
   //"LLM Evaluation, Human Simulation, Human Preference Modeling, and Human-AI Interaction.\n My research focuses on understanding the capabilities and limitations of LLM-based evaluation and human judgment simulation, with applications to education and other human-centered settings.", // ← 例
  imageUrl:"/about_me.JPG",
  googleScholarUrl: "https://scholar.google.co.jp/citations?view_op=list_works&hl=ja&authuser=3&user=NT4C1ZUAAAAJ",
  githubUsername: "momo0817",
  linkedinUsername: "momoka-furuhashi",
  twitterUsername: "tohoku_nlp_mmk",
  // blogUrl: "https://",
  // cvUrl: "http://localhost:3000/cv",
  // cvUrl:"https://momo0817.github.io/app/cv",
  cvUrl: "/cv",
  institutionUrl: "https://www.tohoku.ac.jp",
  // altName: "",
  // secretDescription: "I like dogs.",
};
