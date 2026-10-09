import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        <p className="shrink-0 text-sm text-zinc-500">{news.date}</p>
        <h3 className="font-serif text-sm">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
      </div>
      {news.description && (
        <p className="mt-1 text-sm text-zinc-600 sm:ml-[7.5rem]">
          {news.description}
        </p>
      )}
    </div>
  );
}
