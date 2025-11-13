import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Research_Fellowship } from "@/data/research-fellowship";

export function ResearchFellowshipEntry({
  researchFellowship,
  hideLink,
  useEnglish = false,
}: {
  researchFellowship: Research_Fellowship;
  hideLink?: boolean;
  useEnglish?: boolean;
}) {
  return (
    <div className="grid grid-cols-4 gap-x-3 py-3">
      {/* 日付 */}
      <span className="text-xs text-zinc-500 mt-1">{researchFellowship.date}</span>

      {/* タイトル・説明・リンク */}
      <div className="col-span-3 flex flex-col">
        {/* タイトル */}
        <h3 className="font-serif text-md text-zinc-900 mb-1">
          {useEnglish ? researchFellowship.titleEn || researchFellowship.title : researchFellowship.title}
        </h3>

        {/* 任意情報（小さめ） */}
        {researchFellowship.description && (
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {useEnglish
              ? researchFellowship.descriptionEn || researchFellowship.description
              : researchFellowship.description}
          </p>
        )}

        {/* link部分（CV用に非表示可能） */}
        {!hideLink && researchFellowship.link && (
          <Link
            href={researchFellowship.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 mt-2 transition-colors duration-300"
          >
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="tracking-wider uppercase">Link</span>
          </Link>
        )}
      </div>
    </div>
  );
}
