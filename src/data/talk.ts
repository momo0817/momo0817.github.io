export interface Talk {
  date: string;
  title: string;
  titleEn?: string;  
  description?: string;
  descriptionEn?: string;
  link?: string;
}

export const talkData: Talk[] = [
  {
    date: "October 2025",
    title: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    description: "LLM勉強会",
    descriptionEn: "LLM Study Group",
    link: "https://drive.google.com/file/d/1MBOKCK3nS1-5sSVV-EZw-6gCNDL9XA2O/view"
  },
  {
    date: "March 2025",
    title: "生成系タスクの自動評価においてチェックリストの使用は有効なのか？",
    titleEn: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    description: "LLM勉強会",
    descriptionEn: "LLM Study Group",
    link: "https://drive.google.com/file/d/1iCTgvNHYrjXEFWfLmgO9J1X0lqJCPNLk/view"
  },
  {
    date: "September 2024",
    title: "はじめての国際会議~他分野編~",
    titleEn: "First International Conference ~Other Fields~",
    description: "「目指せ国際会議！」- YANS2024",
    descriptionEn: "Aiming for International Conferences! - YANS2024",
    link: "https://drive.google.com/file/d/17WBidqx69GkD94A9CESqaGUPSB93a7TT/view"
  },
  {
    date: "July 2024",
    title: "国語の記述式問題における（答案にあった）コメント文生成の研究",
    titleEn: "Research on Generating Comment Sentences for Japanese Short Answer Questions (Matching the Answers)",
    description: "「サイエンス・アドバイザーと一緒に考える 研究者ってなに？」- 東北大学オープンキャンパス2024",
    descriptionEn: "Thinking with Science Advisors: What is a Researcher? - Tohoku University Open Campus 2024",
  },
  {
    date: "February 2024",
    title: "システムによるフィードバック体験ワークショップ",
    titleEn: "Workshop on System-generated Feedback Experience",
  }

];
export function getEnglishTalks(): Talk[] {
  return talkData.map(talk => ({
    ...talk,
    title: talk.titleEn || talk.title,
    description: talk.descriptionEn || talk.description
  }));
}

