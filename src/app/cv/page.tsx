// src/app/cv/page.tsx
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { TalkEntry } from "@/components/talk-entry";
import { talkData } from "@/data/talk";
import { ResearchFellowshipEntry } from "@/components/reseach-fellowship";
import { researchFellowshipData } from "@/data/research-fellowship";
import { OthersEntry } from "@/components/others";
import { othersData } from "@/data/others";
import { sectionOrder, Section } from "@/data/section-order";
import { Publication, publicationTypeLabels, PublicationType } from "@/data/publication";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12">
      <h1 className="text-2xl font-bold mb-8">Momoka Furuhashi - CV</h1>

      {sectionOrder.map((sectionName) => {
        switch (sectionName) {
          case Section.Education:
            return (
              educationData.length > 0 && (
                <section key={sectionName} className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Education</h2>
                  <div className="space-y-4">
                    {educationData.map((edu, idx) => (
                      <EducationEntry key={idx} education={edu} />
                    ))}
                  </div>
                </section>
              )
            );
          case Section.Publication:
            if (publicationData.length === 0) return null;

            const groupedPubs: Record<string, Publication[]> = {};
            publicationData.forEach(pub => {
              if (!groupedPubs[pub.type]) groupedPubs[pub.type] = [];
              groupedPubs[pub.type].push(pub);
            });

            const typeOrder: PublicationType[] = [
              "international-conference-peer-reviewed",
              "journal-peer-reviewed",
            //   "international-conference-peer-reviewed-workshop",
              "domestic-conference-non-peer-reviewed",
            //   "domestic-symposium-non-peer-reviewed",
              "preprint",
              "other"
            ];

            return (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Publications</h2>
                {typeOrder.map(type => {
                  const pubs = groupedPubs[type];
                  if (!pubs || pubs.length === 0) return null;
                  return (
                    <div key={type} className="mb-4">
                      <h3 className="italic font-medium">{publicationTypeLabels[type]?.en || type}</h3>
                      <div className="space-y-2">
                        {pubs.map((pub, idx) => (
                          <PublicationEntry key={idx} publication={pub} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          case Section.Experience:
            return (
              experienceData.length > 0 && (
                <section key={sectionName} className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Experience</h2>
                  {experienceData.map((exp, idx) => (
                    <ExperienceEntry key={idx} experience={exp} />
                  ))}
                </section>
              )
            );
          case Section.Talk:
            return (
              talkData.length > 0 && (
                <section key={sectionName} className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Talks</h2>
                  {talkData.map((talk, idx) => (
                    <TalkEntry key={idx} talk={talk} />
                  ))}
                </section>
              )
            );
          case Section.Research_Fellowship:
            return (
              researchFellowshipData.length > 0 && (
                <section key={sectionName} className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Grant</h2>
                  {researchFellowshipData.map((rf, idx) => (
                    <ResearchFellowshipEntry key={idx} researchFellowship={rf} />
                  ))}
                </section>
              )
            );
          case Section.Others:
            return (
              othersData.length > 0 && (
                <section key={sectionName} className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">Others</h2>
                  {othersData.map((other, idx) => (
                    <OthersEntry key={idx} others={other} />
                  ))}
                </section>
              )
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
