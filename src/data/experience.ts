export interface Experience {
  date: string;
  type: "internship" | "research-assistant" | "student-trainee" | "part-time" | "volunteer" | "other";
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2024 - Present",
    type: "research-assistant",
    title: "Research Assistant",
    company: "Research and Development Center for Large Language Models, National Institute of Informatics",
    advisor: "Yusuke Miyao, and Saku Sugawara",
    companyUrl: "https://llm-jp.nii.ac.jp/en/",
  },
  {
    date: "April 2024 - Present",
    type: "part-time",
    title: "Part-time Researcher",
    company: "RIKEN AIP Natural Language Understanding Team",
    advisor: "Kentaro Inui",
    companyUrl: "https://www.riken.jp/en/research/labs/aip/goalorient_tech/nat_lang_understand/",
  },
  {
    date: "December 2023 - April 2024",
    type: "research-assistant",
    title: "Research Assistant",
    company: "National Institute of Informatics",
    advisor: "Saku Sugawara",
    companyUrl: "https://www.nii.ac.jp/en/",
  },
  {
    date: "September 2023 - Present",
    type: "student-trainee",
    title: "Student Trainee",
    company: "RIKEN AIP Natural Language Understanding Team",
    advisor: "Kentaro Inui",
    companyUrl: "https://www.riken.jp/en/research/labs/aip/goalorient_tech/nat_lang_understand/",
  },
  {
    date: "September 2023",
    type: "internship",
    title: "Summer Internship",
    company: "NEC Corporation AI Analytics"
  },

];
