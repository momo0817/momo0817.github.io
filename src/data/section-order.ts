export enum Section {
  Education = "education",
  Experience = "experience",
  Portfolio = "portfolio",
  Publication = "publication",
  Talk = "talk",
  Research_Fellowship = "research_fellowship",
  Others = "others",
  News = "news",
}

export const sectionOrder = [
  Section.News,
  Section.Education,
  Section.Publication,
  Section.Experience,
  Section.Talk,
  Section.Portfolio,
  Section.Research_Fellowship,
  Section.Others
];
