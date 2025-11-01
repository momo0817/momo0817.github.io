// data/publication.ts

// 出版物の種類を定義
export type PublicationType = 
  | "international-conference-peer-reviewed"
  | "journal-peer-reviewed"
  | "domestic-conference-non-peer-reviewed"
  | "domestic-symposium-non-peer-reviewed"
  | "international-conference-peer-reviewed-workshop"
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
  "domestic-symposium-non-peer-reviewed": {
    en: "Domestic Symposium (Non-peer-reviewed)",
    ja: "国内シンポジウム（査読なし）"
  },
  "international-conference-peer-reviewed-workshop": {
    en: "International Conference (Peer-reviewed, Workshop)",
    ja: "国際会議（査読あり・ワークショップ）"
  },
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
  type: PublicationType; // ← この行を追加
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
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    type: "international-conference-peer-reviewed", // ← 追加
    conference: "EMNLP",
    title: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
    authors: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara",
    paperUrl: "https://arxiv.org/abs/2508.15218?context=cs.CL",
    projectUrl: "https://momo0817.github.io/checklist-effectiveness-study-github.io/",
    codeUrl: "https://github.com/momo0817/checklist-effectiveness-study/tree/main",
    tldr: "We investigate whether checklists should be used for all questions or selectively, generate them using six methods, evaluate their effectiveness across eight model sizes, and identify checklist items that correlate with human evaluations.",
  },
  {
    year: "2025",
    type: "international-conference-peer-reviewed-workshop", // ← 追加
    conference: "EMNLP Workshop BabyLM Challenge",
    title: "Batch-wise Convergent Pretraining: Step-by-Step Learning Inspired by Child Language Development",
    authors: "Ko Yoshida, Daiki Shiono, Kai Sato, Toko Miura, Momoka Furuhashi, Jun Suzuki",
  },
  {
    year: "2024",
    type: "international-conference-peer-reviewed", // ← 追加
    conference: "EDULEARN",
    title: "Automatic feedback generation for short answer questions using answer diagnostic graphs",
    authors: "Momoka Furuhashi, Hiroaki Funayama, Yuya Iwase, Yuichiroh Matsubayashi, Yoriko Isobe, Toru Nagahama, Saku Sugawara, Kentaro Inui.",
    paperUrl: "https://library.iated.org/view/FURUHASHI2024AUT",
  },
  {
    year: "2025",
    type: "domestic-symposium-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "類題を用いた教育的フィードバックの自動評価.",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔.",
  },
  {
    year: "2025",
    type: "domestic-symposium-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "バッチ単位収束型事前学習：子どもの言語発達に着想を得た一歩ずつの学習.",
    authors: "吉田 倖, 塩野 大輝, 佐藤 魁, 古橋 萌々香, 三浦 東子, 鈴木 潤.",
    award: "奨励賞"
  },
  {
    year: "2025",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "NLP",
    title: "生成系タスクの自動評価においてチェックリストの使用は有効なのか？",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔.",
    paperUrl: "https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P5-9.pdf",
  },
  {
    year: "2024",
    type: "domestic-symposium-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "チェックリストを利用した生成系タスクの網羅的評価.",
    authors: "古橋 萌々香, 中山 功太, 児玉 貴志, 菅原 朔, 関根 聡, 宮尾 祐介.",
    award: "スポンサー賞（サイバーエージェント賞）",
    award2: "スポンサー賞（SB Intutions株式会社賞）"
  },
  {
    year: "2024",
    type: "domestic-conference-non-peer-reviewed", // ← 追加
    conference: "NLP",
    title: "答案診断グラフを用いた国語記述式答案へのフィードバックの生成．",
    authors: "古橋萌々香, 舟山弘晃, 岩瀬裕哉, 松林優一郎, 磯部順子, 菅原朔, 乾健太郎.",
    paperUrl: "https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/A1-4.pdf",
  },
  {
    year: "2023",
    type: "domestic-symposium-non-peer-reviewed", // ← 追加
    conference: "YANS",
    title: "次世代教育のための論理的思考力育成データセットの生成について. ",
    authors: "古橋萌々香,松林優一郎,磯部順子,舟山弘晃,乾健太郎. "
  },

];

// 出版物をタイプごとにグループ化する関数
export function groupPublicationsByType(publications: Publication[]): Record<PublicationType, Publication[]> {
  const grouped: Record<PublicationType, Publication[]> = {
    "international-conference-peer-reviewed": [],
    "journal-peer-reviewed": [],
    "domestic-conference-non-peer-reviewed": [],
    "domestic-symposium-non-peer-reviewed": [],
    "international-conference-peer-reviewed-workshop": [],
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


// // 出版物の種類を定義
// export type PublicationType = 
//   | "international-conference-peer-reviewed"
//   | "journal-peer-reviewed"
//   | "domestic-conference-non-peer-reviewed"
//   | "international-conference-peer-reviewed (workshop)"
//   | "preprint"
//   | "other";

// // 日本語表示用のラベル
// export const publicationTypeLabels: Record<PublicationType, { en: string; ja: string }> = {
//   "international-conference-peer-reviewed": {
//     en: "International Conference (Peer-reviewed)",
//     ja: "国際会議（査読あり）"
//   },
//   "journal-peer-reviewed": {
//     en: "Journal (Peer-reviewed)",
//     ja: "ジャーナル（査読あり）"
//   },
//   "domestic-conference-non-peer-reviewed": {
//     en: "Domestic Conference (Non-peer-reviewed)",
//     ja: "国内会議（査読なし）"
//   },
//   "international-conference-peer-reviewed (workshop)": {
//     en: "Workshop",
//     ja: "ワークショップ"
//   },
//   "preprint": {
//     en: "Preprint",
//     ja: "プレプリント"
//   },
//   "other": {
//     en: "Other",
//     ja: "その他"
//   }
// };

// export interface Publication {
//   year: string;
//   type: PublicationType; // 追加：出版物の種類
//   conference: string;
//   title: string;
//   authors: string;
//   paperUrl?: string;
//   projectUrl?: string;
//   codeUrl?: string;
//   bibtex?: string;
//   tldr?: string;
//   imageUrl?: string;
//   award?: string;
// }

// export const publicationData: Publication[] = [
//   {
//     year: "2025",
//     type: "international-conference-peer-reviewed",
//     conference: "EMNLP",
//     title: "Are Checklists Really Useful for Automatic Evaluation of Generative Tasks?",
//     authors: "Momoka Furuhashi, Kouta Nakayama, Takashi Kodama, and Saku Sugawara",
//     paperUrl: "https://arxiv.org/abs/2508.15218?context=cs.CL",
//     projectUrl: "https://momo0817.github.io/checklist-effectiveness-study-github.io/",
//     codeUrl: "https://github.com/momo0817/checklist-effectiveness-study/tree/main",
//     tldr: "We investigate whether checklists should be used for all questions or selectively, generate them using six methods, evaluate their effectiveness across eight model sizes, and identify checklist items that correlate with human evaluations.",
//   },
//   {
//     year: "2025",
//     type: "international-conference-peer-reviewed (workshop)",
//     conference: "EMNLP 2025 Workshop BabyLM Challenge",
//     title: "Batch-wise Convergent Pretraining: Step-by-Step Learning Inspired by Child Language Development",
//     authors: "Ko Yoshida, Daiki Shiono, Kai Sato, Toko Miura, Momoka Furuhashi, Jun Suzuki",
//   },
//   {
//     year: "2024",
//     type: "international-conference-peer-reviewed",
//     conference: "EDULEARN",
//     title: "Automatic feedback generation for short answer questions using answer diagnostic graphs",
//     authors: "Momoka Furuhashi, Hiroaki Funayama, Yuya Iwase, Yuichiroh Matsubayashi, Yoriko Isobe, Toru Nagahama, Saku Sugawara, Kentaro Inui.",
//     paperUrl: "https://library.iated.org/view/FURUHASHI2024AUT",
//   },
// ];

// // 出版物をタイプごとにグループ化する関数
// export function groupPublicationsByType(publications: Publication[]): Record<PublicationType, Publication[]> {
//   const grouped: Record<PublicationType, Publication[]> = {
//     "international-conference-peer-reviewed": [],
//     "journal-peer-reviewed": [],
//     "domestic-conference-non-peer-reviewed": [],
//     "international-conference-peer-reviewed (workshop)": [],
//     "preprint": [],
//     "other": []
//   };

//   publications.forEach(pub => {
//     grouped[pub.type].push(pub);
//   });

//   return grouped;
// }

// // 年度でソートする関数
// export function sortPublicationsByYear(publications: Publication[]): Publication[] {
//   return [...publications].sort((a, b) => parseInt(b.year) - parseInt(a.year));
// }

// // タイプごとにグループ化＆年度でソート
// export function getGroupedAndSortedPublications(): Record<PublicationType, Publication[]> {
//   const grouped = groupPublicationsByType(publicationData);
  
//   // 各グループ内で年度順にソート
//   Object.keys(grouped).forEach(type => {
//     grouped[type as PublicationType] = sortPublicationsByYear(grouped[type as PublicationType]);
//   });

//   return grouped;
// }