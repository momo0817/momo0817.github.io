import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Award } from "@/data/award";

export function AwardEntry({ award, hideLink }: { award: Award; hideLink?: boolean }) {
  return (
    <div className="grid grid-cols-4 gap-x-3 py-3">
      <span className="text-xs text-zinc-500 mt-1">{award.date}</span>

      <div className="col-span-3 flex flex-col">
        <h3 className="font-serif text-md text-zinc-900 mb-1">
          {award.title}
        </h3>

        {award.description && (
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            {award.description}
          </p>
        )}

        {!hideLink && award.link && (
          <Link
            href={award.link}
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
