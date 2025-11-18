import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Publication } from "@/data/publication";

interface PublicationEntryProps {
  publication: Publication;
  hideLinks?: boolean; // ← 追加
  index?: number;
  showJapaneseTitle?: boolean;
}

function highlightAuthor(authors: string) {
  const myNames = ["Momoka Furuhashi", "古橋萌々香", "古橋 萌々香"];

  let highlighted = authors;
  myNames.forEach((name) => {
    const regex = new RegExp(`(${name})`, "g");
    highlighted = highlighted.replace(
      regex,
      '<span class="font-semibold italic underline decoration-2 underline-offset-2">$1</span>'
    );
  });

  return (
    <span
      className="[&_span]:font-semibold [&_span]:italic [&_span]:underline [&_span]:decoration-2 [&_span]:underline-offset-2"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
}

export function PublicationEntry({ publication, hideLinks, showJapaneseTitle = false, index }: PublicationEntryProps & { showJapaneseTitle?: boolean }) {
  return (
    <li className="mb-6">
      {/* 番号 */}
      {index !== undefined && (
        <span className="font-semibold mr-2">{index}.</span>
      )}

      <div className="flex flex-col sm:flex-row gap-6">
        {publication.imageUrl && (
          <div className="w-full sm:w-1/4 min-w-[160px] relative">
            <Image
              src={publication.imageUrl}
              alt={publication.title}
              width={160}
              height={200}
              className="rounded-lg transition-all duration-300"
            />
          </div>
        )}

        <div className="flex flex-col flex-1">
          {/* 論文タイトル */}
          <h3 className="font-serif text-md mb-1">
            {showJapaneseTitle && publication.titleEn && publication.title !== publication.titleEn ? (
              <>
                {publication.titleEn} {/* 英語タイトル */}
                <span className="block text-zinc-600 italic text-sm">
                  {publication.title} (in Japanese) {/* 日本語タイトル */}
                </span>
              </>
            ) : (
              publication.title // HP用: 日本語のみ
            )}
          </h3>


          {/* 著者名 */}
          <p className="text-sm text-zinc-600 mb-1">{highlightAuthor(publication.authors)}</p>

          {/* 会議情報 */}
          <p className="text-sm text-zinc-500 mb-2">
            {publication.fullConferenceName ?? publication.conference}
            {publication.conferenceAbbr ? ` (${publication.conferenceAbbr})` : ""}
            {publication.pages ? `, pp. ${publication.pages}` : ""}
            {publication.month ? `, ${publication.month}` : ""}
            {publication.year ? `, ${publication.year}` : ""}
            {publication.location ? `, ${publication.location}` : ""}
          </p>

          {/* Paper / BibTeX のリンクを非表示にする場合 */}
          {!hideLinks && (
            <div className="flex flex-row gap-6 mb-2">
              {publication.paperUrl && (
                <a
                  href={publication.paperUrl}
                  className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="tracking-wider uppercase">Paper</span>
                </a>
              )}
              {publication.bibtex && (
                <a
                  href={publication.bibtex}
                  className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="tracking-wider uppercase">BibTeX</span>
                </a>
              )}
              {publication.codeUrl && (
                <a
                  href={publication.codeUrl}
                  className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="tracking-wider uppercase">Code</span>
                </a>
              )}
              {publication.projectUrl && (
                <a
                  href={publication.projectUrl}
                  className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span className="tracking-wider uppercase">Project</span>
                </a>
              )}
              {publication.tldr && (
            <p className="text-sm italic text-zinc-600 mt-2">{publication.tldr}</p>
          )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
