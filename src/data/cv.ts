import { experienceData, type Experience } from "./experience";

export const cvExperienceData: Experience[] = experienceData
  .filter((experience) => !(experience.company.startsWith("RIKEN") && experience.type === "student-trainee"))
  .map((experience) => {
    if (experience.companyUrl === "https://llm-jp.nii.ac.jp/en/") {
      return {
        ...experience,
        description: "Conducted research on LLM evaluation and human judgment simulation, resulting in three first-author papers at EMNLP 2025, EMNLP 2026, and AACL 2026.",
      };
    }
    if (experience.company.startsWith("RIKEN")) {
      return {
        ...experience,
        date: "September 2023 – July 2026",
        title: "Researcher / Student Trainee",
        description: "Studied automated feedback generation for Japanese reading comprehension tasks, resulting in a peer-reviewed journal publication.",
      };
    }
    return experience;
  });

export const technicalSkills = [
  { category: "Programming & Development", skills: "Python, Git, Linux" },
  { category: "ML & LLM Tools", skills: "vLLM, Hugging Face Transformers, Hugging Face Datasets, scikit-learn, OpenAI API" },
  { category: "Scientific Computing", skills: "NumPy, pandas, SciPy, Statistical Analysis" },
  { category: "Computing Environments", skills: "GPU Computing" },
];
