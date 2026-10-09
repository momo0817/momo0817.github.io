import Link from "next/link";
import { aboutMe } from "@/data/aboutme";
import { awardData } from "@/data/award";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { othersData } from "@/data/others";
import { publicationData } from "@/data/publication";
import { researchFellowshipData } from "@/data/research-fellowship";
import { reviewerData } from "@/data/reviewer";
import { talkData } from "@/data/talk";

const navItems = [
  { href: "/", label: "About", show: true },
  { href: aboutMe.cvUrl ?? "/cv", label: "CV", show: Boolean(aboutMe.cvUrl) },
  { href: "/education", label: "Education", show: educationData.length > 0 },
  { href: "/publications", label: "Publications", show: publicationData.length > 0 },
  { href: "/experience", label: "Experience", show: experienceData.length > 0 },
  { href: "/grant", label: "Grant", show: researchFellowshipData.length > 0 },
  { href: "/awards", label: "Awards", show: awardData.length > 0 },
  { href: "/talks", label: "Talks", show: talkData.length > 0 },
  { href: "/reviewer", label: "Reviewer", show: reviewerData.length > 0 },
  { href: "/others", label: "Others", show: othersData.length > 0 },
].filter((item) => item.show);

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-10 -mx-6 border-y border-zinc-200 bg-[#FFFCF8]/95 px-6 py-3 backdrop-blur md:-mx-8 md:px-8">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-xs uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
