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
}

export const aboutMe: AboutMe = {
  name: "Momoka Furuhashi",
  title: "1st year Ph.D. Student in Computer Science",
  institution: "Tohoku University",
  // Note that links work in the description
  description:
    "I'm a first-year PhD student at <a href='https://www.nlp.ecei.tohoku.ac.jp/about-us/labs/'>TohokuNLP Group</a>, <a href='https://www.is.tohoku.ac.jp/en/'>Tohoku University</a>. I’m interested in applying NLP to education.",
  email: "furuhashi.momoka.p4@dc.tohoku.ac.jp",
  imageUrl:"/about_me.JPG",
  googleScholarUrl: "-",
  githubUsername: "momo0817",
  linkedinUsername: "-",
  twitterUsername: "tohoku_nlp_mmk",
  // blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.tohoku.ac.jp",
  // altName: "",
  // secretDescription: "I like dogs.",
};
