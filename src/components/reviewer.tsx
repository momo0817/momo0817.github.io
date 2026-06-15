import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reviewer } from "@/data/reviewer";

export function ReviewerEntry({
  reviewer,
  hideLink,
}: {
  reviewer: Reviewer;
  hideLink?: boolean;
}) {
  return (
    <div className="py-1">
      <div className="flex items-center gap-2 text-sm text-zinc-900">
        <span>
          • {reviewer.title}: {reviewer.date}
        </span>

        {!hideLink && reviewer.link && (
          <Link
            href={reviewer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowUpRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}