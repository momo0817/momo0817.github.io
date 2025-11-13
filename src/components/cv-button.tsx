"use client"; // クライアントコンポーネントにする

import { ArrowUpRight } from "lucide-react";

export function CvButton({ cvUrl }: { cvUrl?: string }) {
  if (!cvUrl) return null;

  return (
    <a
      href={cvUrl}
      className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowUpRight
        size={12}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
      />
      <span className="tracking-wider uppercase">CV</span>
    </a>
  );
}
