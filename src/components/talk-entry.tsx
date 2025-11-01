import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Talk } from "@/data/talk";

export function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <div className="grid grid-cols-4 gap-x-3 py-3">
      {/* 日付 */}
      <span className="text-xs text-zinc-500 mt-1">{talk.date}</span>

      {/* タイトル・説明・リンク */}
      <div className="col-span-3 flex flex-col">
        {/* タイトル */}
        <h3 className="font-serif text-md text-zinc-900 mb-1">
          {talk.title}
        </h3>

        {/* 任意情報（小さめ） */}
        {talk.description && (
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {talk.description}
          </p>
        )}

        {/* link部分（PublicationEntryと統一デザイン） */}
        {talk.link && (
          <Link
            href={talk.link}
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
