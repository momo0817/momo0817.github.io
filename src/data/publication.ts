// data/publication.ts

// 出版物の種類を定義
export type PublicationType = 
  | "international-conference-peer-reviewed"
  | "journal-peer-reviewed"
  | "domestic-conference-non-peer-reviewed"
  // | "domestic-symposium-non-peer-reviewed"
  // | "international-conference-peer-reviewed-workshop"
  | "preprint"
  | "other";

// 日本語表示用のラベル
export const publicationTypeLabels: Record<PublicationType, { en: string; ja: string }> = {
  "international-conference-peer-reviewed": {
    en: "International Conference (Peer-reviewed)",
    ja: "国際会議（査読あり）"
  },
  "journal-peer-reviewed": {
    en: "Journal (Peer-reviewed)",
    ja: "ジャーナル（査読あり）"
  },
  "domestic-conference-non-peer-reviewed": {
    en: "Domestic Conference (Non-peer-reviewed)",
    ja: "国内会議（査読なし）"
  },
  // "domestic-symposium-non-peer-reviewed": {
  //   en: "Domestic Symposium (Non-peer-reviewed)",
  //   ja: "国内シンポジウム（査読なし）"
  // },
  // "international-conference-peer-reviewed-workshop": {
  //   en: "International Conference (Peer-reviewed, Workshop)",
  //   ja: "国際会議（査読あり・ワークショップ）"
  // },
  "preprint": {
    en: "Preprint",
    ja: "プレプリント"
  },
  "other": {
    en: "Other",
    ja: "その他"
  }
};

export interface Publication {
  year: string;
  type: PublicationType; 
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  award2?: string;
  titleEn?: string;
  conferenceEn?: string;
  authorsEn?: string;
  awardEn?: string;
  award2En?: string;
  pages?: string;
  acceptanceRate?: number;
  fullConferenceName?: string; // "The 2025 Conference on Empirical Methods in Natural Language Processing"
  conferenceAbbr?: string; 
  month?: string;          // "Nov"
  location?: string; 
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    type: "domestic-conference-non-peer-reviewed",
    conference: "Japanese Symposium on Open Large Language Models",
    title: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    authors: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara.",
  },
  {
    year: "2025",
    type: "international-conference-peer-reviewed", // ← 追加
    conference: "EMNLP",
    title: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    authors: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara.",
    fullConferenceName:"In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    conferenceAbbr:"EMNLP2025 Main",
    pages: "10641--10664",
    month: "November",
    location: "Suzhou, China",
    paperUrl: "https://aclanthology.org/2025.emnlp-main.538/",
    projectUrl: "https://momo0817.github.io/checklist-effectiveness-study-github.io/",
    codeUrl: "https://github.com/momo0817/checklist-effectiveness-study/tree/main",
    tldr: "We investigate whether checklists should be used for all questions or selectively, generate them using six methods, evaluate their effectiveness across eight model sizes, and identify checklist items that correlate with human evaluations.",
    },
  {
    year: "2025",
    type: "international-conference-peer-reviewed", // ← 追加
    conference: "EMNLP Workshop BabyLM Challenge",
    title: "Batch-wise Convergent Pretraining: Step-by-Step Learning Inspired by Child Language Development",
    authors: "Ko Yoshida, Daiki Shiono, Kai Sato, Toko Miura, Momoka Furuhashi, and Jun Suzuki.",
    fullConferenceName:"Proceedings of the First BabyLM Workshop",
    conferenceAbbr:"BabyLM Workshop",
    pages: "508--524",
    month: "November",
    location: "Suzhou, China",
    paperUrl:"https://aclanthology.org/2025.babylm-main.36/"
  },
  {
    year: "2024",
    type: "international-conference-peer-reviewed", // ← 追加
    conference: "EDULEARN",
    title: "Automatic feedback generation for short answer questions using answer diagnostic graphs",
    authors: "Momoka Furuhashi, Hiroaki Funayama, Yuya Iwase, Yuichiroh Matsubayashi, Yoriko Isobe, Toru Nagahama, Saku Sugawara, and Kentaro Inui.",
    fullConferenceName:"The 16th annual International Conference on Education and New Learning Technologies",
    conferenceAbbr:"EDULEARN 2024",
    pages: "6706--6716",
    month: "July",
    location: "Majorca, Spain",
    paperUrl: "https://library.iated.org/view/FURUHASHI2024AUT",
  },
  {
    year: "2025",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "類題を用いた教育的フィードバックの自動評価.",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔.",
    titleEn: "Automatic Evaluation of Educational Feedback Using Similar Questions",
    authorsEn: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara.",
    fullConferenceName:"The 20th Symposium of Young Researcher Association for NLP Studies",
    conferenceAbbr:"YANS 2025",
    month: "September",
    location: "Hamamatsu, Japan",
  },
  {
    year: "2025",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "バッチ単位収束型事前学習：子どもの言語発達に着想を得た一歩ずつの学習.",
    authors: "吉田 倖, 塩野 大輝, 佐藤 魁, 古橋 萌々香, 三浦 東子, 鈴木 潤.",
    award: "奨励賞",
    titleEn: "Batch-wise Convergent Pretraining: Step-by-Step Learning Inspired by Child Language Development",
    authorsEn: "Ko Yoshida, Daiki Shiono, Kai Sato, Toko Miura, Momoka Furuhashi, and Jun Suzuki.",
    awardEn: "Encouragement Award",
    fullConferenceName:"The 20th Symposium of Young Researcher Association for NLP Studies",
    conferenceAbbr:"YANS 2025",
    month: "September",
    location: "Hamamatsu, Japan",
  },
  {
    year: "2025",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "NLP",
    title: "生成系タスクの自動評価においてチェックリストの使用は有効なのか？",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔.",
    paperUrl: "https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P5-9.pdf",
    titleEn: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    authorsEn: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara.",
    fullConferenceName:"The 31th Annual Meeting of the Association for Natural Language Processing",
    conferenceAbbr:"NLP 2025",
    pages: "1968--1973",
    month: "March",
    location: "Nagasaki, Japan",

  },
  {
    year: "2024",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "チェックリストを利用した生成系タスクの網羅的評価.",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔, 関根 聡, 宮尾 祐介.",
    award: "スポンサー賞（サイバーエージェント賞）",
    award2: "スポンサー賞（SB Intutions株式会社賞）",
    titleEn: "Comprehensive Evaluation of Generative Tasks Using Checklists",
    authorsEn: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, Saku Sugawara, Satoshi Sekine, and Yusuke Miyao.",
    awardEn: "Sponsor Award (CyberAgent Award)",
    award2En: "Sponsor Award (SB Intutions Inc. Award)",
    fullConferenceName:"The 19th Symposium of Young Researcher Association for NLP Studies",
    conferenceAbbr:"YANS 2024",
    month: "September",
    location: "Osaka, Japan",
  },
  {
    year: "2024",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "NLP",
    title: "答案診断グラフを用いた国語記述式答案へのフィードバックの生成．",
    authors: "古橋萌々香, 舟山弘晃, 岩瀬裕哉, 松林優一郎, 磯部順子, 菅原朔, 乾健太郎.",
    paperUrl: "https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/A1-4.pdf",
    titleEn: "Automatic feedback generation for short answer questions using answer diagnostic graphs",
    authorsEn: "Momoka Furuhashi, Hiroaki Funayama, Yuya Iwase, Yuichiroh Matsubayashi, Yoriko Isobe, Saku Sugawara, and Kentaro Inui.",
    fullConferenceName:"The 30th Annual Meeting of the Association for Natural Language Processing",
    conferenceAbbr:"NLP 2024",
    pages: "18--23",
    month: "March",
    location: "Kobe, Japan",
  },
  {
    year: "2023",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "次世代教育のための論理的思考力育成データセットの生成について. ",
    authors: "古橋萌々香,松林優一郎,磯部順子,舟山弘晃,乾健太郎. ",
    titleEn: "Generating a Dataset for Developing Logical Thinking Skills for Next-Generation Education",
    authorsEn: "Momoka Furuhashi, Yuichiroh Matsubayashi, Yoriko Isobe, Hiroaki Funayama, and Kentaro Inui.",
    fullConferenceName:"The 18th Symposium of Young Researcher Association for NLP Studies",
    conferenceAbbr:"YANS 2023",
    month: "August",
    location: "Tokyo, Japan",
  },

];
export function getEnglishPublications(): Publication[] {
  return publicationData.map(pub => ({
    ...pub,
    title: pub.titleEn || pub.title,
    conference: pub.conferenceEn || pub.conference,
    authors: pub.authorsEn || pub.authors,
    paperUrl: undefined, // CVでは非表示
    bibtex: undefined,   // CVでは非表示
    award: pub.awardEn || pub.award,
    award2: pub.award2En || pub.award2,
  }));
}

// 出版物をタイプごとにグループ化する関数
export function groupPublicationsByType(publications: Publication[]): Record<PublicationType, Publication[]> {
  const grouped: Record<PublicationType, Publication[]> = {
    "international-conference-peer-reviewed": [],
    "journal-peer-reviewed": [],
    "domestic-conference-non-peer-reviewed": [],
    // "domestic-symposium-non-peer-reviewed": [],
    // "international-conference-peer-reviewed-workshop": [],
    "preprint": [],
    "other": []
  };

  publications.forEach(pub => {
    grouped[pub.type].push(pub);
  });

  return grouped;
}

// 年度でソートする関数
export function sortPublicationsByYear(publications: Publication[]): Publication[] {
  return [...publications].sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

// タイプごとにグループ化＆年度でソート
export function getGroupedAndSortedPublications(): Record<PublicationType, Publication[]> {
  const grouped = groupPublicationsByType(publicationData);
  
  // 各グループ内で年度順にソート
  Object.keys(grouped).forEach(type => {
    grouped[type as PublicationType] = sortPublicationsByYear(grouped[type as PublicationType]);
  });

  return grouped;
}
// すでにある export const publicationData の下あたりに追加



