import { notFound } from "next/navigation";
import { Awards } from "@/components/awards";
import { EducationEntry } from "@/components/education-entry";
import { ExperienceEntry } from "@/components/experience-entry";
import { OthersEntry } from "@/components/others";
import { PublicationEntry } from "@/components/publication-entry";
import { ResearchFellowshipEntry } from "@/components/reseach-fellowship";
import { ReviewerEntry } from "@/components/reviewer";
import { SiteNav } from "@/components/site-nav";
import { TalkEntry } from "@/components/talk-entry";
import { awardData } from "@/data/award";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { othersData } from "@/data/others";
import { Publication, PublicationType, publicationData } from "@/data/publication";
import { researchFellowshipData } from "@/data/research-fellowship";
import { reviewerData } from "@/data/reviewer";
import { talkData } from "@/data/talk";

const sectionSlugs = [
  "education",
  "publications",
  "experience",
  "grant",
  "awards",
  "talks",
  "reviewer",
  "others",
] as const;

type SectionSlug = (typeof sectionSlugs)[number];

const sectionTitles: Record<SectionSlug, string> = {
  education: "Education",
  publications: "Publications",
  experience: "Experience",
  grant: "Grant",
  awards: "Awards",
  talks: "Talks",
  reviewer: "Reviewer",
  others: "Others",
};

export function generateStaticParams() {
  return sectionSlugs.map((section) => ({ section }));
}

function isSectionSlug(section: string): section is SectionSlug {
  return sectionSlugs.includes(section as SectionSlug);
}

function PublicationsContent() {
  const groupedPubs: Record<string, Publication[]> = {};
  publicationData.forEach((pub) => {
    if (!groupedPubs[pub.type]) {
      groupedPubs[pub.type] = [];
    }
    groupedPubs[pub.type].push(pub);
  });

  const publicationSections: { type: PublicationType; label: string }[] = [
    {
      type: "international-conference-peer-reviewed",
      label: "International Conference (Peer-reviewed)",
    },
    {
      type: "journal-peer-reviewed",
      label: "Journal (Peer-reviewed)",
    },
    {
      type: "domestic-conference-non-peer-reviewed",
      label: "Domestic Conference (Non-peer-reviewed)",
    },
    {
      type: "article",
      label: "Article",
    },
  ];

  return (
    <div className="space-y-8">
      {publicationSections.map(({ type, label }) => {
        const pubs = groupedPubs[type];
        if (!pubs || pubs.length === 0) return null;

        return (
          <section key={type}>
            <h2 className="font-serif text-base md:text-lg mb-3 tracking-wide italic font-medium text-zinc-700">
              {label}
            </h2>
            <ol className="list-decimal space-y-3 pl-5">
              {pubs.map((publication, index) => (
                <PublicationEntry key={index} publication={publication} />
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

function SectionContent({ section }: { section: SectionSlug }) {
  switch (section) {
    case "education":
      return (
        <div className="space-y-7">
          {educationData.map((education, index) => (
            <EducationEntry key={index} education={education} />
          ))}
        </div>
      );
    case "publications":
      return <PublicationsContent />;
    case "experience":
      return (
        <div className="space-y-7">
          {experienceData.map((experience, index) => (
            <ExperienceEntry key={index} experience={experience} />
          ))}
        </div>
      );
    case "grant":
      return (
        <div className="space-y-7">
          {researchFellowshipData.map((researchFellowship, index) => (
            <ResearchFellowshipEntry
              key={index}
              researchFellowship={researchFellowship}
            />
          ))}
        </div>
      );
    case "awards":
      return <Awards awards={awardData} className="space-y-7" />;
    case "talks":
      return (
        <div className="space-y-7">
          {talkData.map((talk, index) => (
            <TalkEntry key={index} talk={talk} />
          ))}
        </div>
      );
    case "reviewer":
      return (
        <div className="space-y-7">
          {reviewerData.map((reviewer, index) => (
            <ReviewerEntry key={index} reviewer={reviewer} />
          ))}
        </div>
      );
    case "others":
      return (
        <div className="space-y-7">
          {othersData.map((others, index) => (
            <OthersEntry key={index} others={others} />
          ))}
        </div>
      );
  }
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (!isSectionSlug(section)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="mx-auto max-w-4xl px-6 pt-4 pb-12 md:px-8 md:pt-6 md:pb-16">
        <div className="space-y-12">
          <SiteNav />

          <section>
            <h1 className="font-serif text-2xl mb-8 tracking-wide uppercase">
              {sectionTitles[section]}
            </h1>
            <SectionContent section={section} />
          </section>
        </div>
      </div>
    </div>
  );
}
