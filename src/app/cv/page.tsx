"use client";

import { EducationEntry } from "@/components/education-entry";
import { aboutMe } from "@/data/aboutme";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData, Publication, publicationTypeLabels, PublicationType, getEnglishPublications } from "@/data/publication";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { TalkEntry } from "@/components/talk-entry";
import { talkData, getEnglishTalks } from "@/data/talk";
import { researchFellowshipData } from "@/data/research-fellowship";
import { ResearchFellowshipEntry } from "@/components/reseach-fellowship";
import { OthersEntry } from "@/components/others";
import { othersData } from "@/data/others";
import { sectionOrder, Section } from "@/data/section-order";


export default function CVPage() {
  const englishPubs = getEnglishPublications();
  const englishTalks = getEnglishTalks();

  return (
    <div className="min-h-screen bg-white text-black px-8 py-12">
      {/* 名前・学年セクション */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">CV</h1>
        <h1 className="text-3xl font-bold">{aboutMe.name}</h1>
        <p className="text-sm text-gray-600">
          {aboutMe.title} at {aboutMe.institution} in Japan.
        </p>
    {/* Research Interest */}
    {aboutMe.researchInterest && (
        <div className="mt-4">
        <h2 className="text-lg font-semibold mb-1">Research Interest</h2>
        <p className="text-sm text-zinc-600">{aboutMe.researchInterest}</p>
        </div>
    )}
      </div>

      {/* 各セクション */}
      {sectionOrder.map((sectionName) => {
        switch (sectionName) {
        case Section.Contact_Information:
            return (
                <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <ul className="space-y-1 text-sm text-zinc-600">
                    {aboutMe.email && (
                    <li>Email: <a href={`mailto:${aboutMe.email}`} className="text-blue-600 hover:underline">{aboutMe.email}</a></li>
                    )}
                    {aboutMe.githubUsername && (
                    <li>GitHub: <a href={`https://github.com/${aboutMe.githubUsername}`} className="text-blue-600 hover:underline">{aboutMe.githubUsername}</a></li>
                    )}
                    {aboutMe.linkedinUsername && aboutMe.linkedinUsername !== "-" && (
                    <li>LinkedIn: <a href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`} className="text-blue-600 hover:underline">{aboutMe.linkedinUsername}</a></li>
                    )}
                    {aboutMe.twitterUsername && (
                    <li>Twitter: <a href={`https://twitter.com/${aboutMe.twitterUsername}`} className="text-blue-600 hover:underline">@{aboutMe.twitterUsername}</a></li>
                    )}
                    {aboutMe.googleScholarUrl && (
                    <li>Google Scholar: <a href={aboutMe.googleScholarUrl} className="text-blue-600 hover:underline">Profile</a></li>
                    )}
                </ul>
                </section>
            );
        case Section.Education:
            return educationData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                  {educationData.map((edu, idx) => (
                    <EducationEntry key={idx} education={edu} />
                  ))}
                </div>
              </section>
            ) : null;
          case Section.Education:
            return educationData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                  {educationData.map((edu, idx) => (
                    <EducationEntry key={idx} education={edu} />
                  ))}
                </div>
              </section>
            ) : null;

          case Section.Publication:
            if (!publicationData.length) return null;
            const groupedPubs: Record<string, Publication[]> = {};
            englishPubs.forEach((pub) => {
              if (!groupedPubs[pub.type]) groupedPubs[pub.type] = [];
              groupedPubs[pub.type].push(pub);
            });
            const typeOrder: PublicationType[] = [
              "international-conference-peer-reviewed",
              "journal-peer-reviewed",
              "domestic-conference-non-peer-reviewed",
              "preprint",
              "other",
            ];
            return (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Publications</h2>
                {typeOrder.map((type) => {
                  const pubs = groupedPubs[type];
                  if (!pubs || !pubs.length) return null;
                  return (
                    <div key={type} className="mb-8"> {/* 元は mb-4 */}
                        <h3 className="italic font-medium mb-4"> {/* 元は mb-0 */}
                            {publicationTypeLabels[type]?.en || type}
                        </h3>
                        <div className="space-y-4"> {/* 元は space-y-2 */}
                            {pubs.map((pub, idx) => (
                            <PublicationEntry key={idx} publication={pub} hideLinks showJapaneseTitle={true}  />
                            ))}
                        </div>
                        </div>

                  );
                })}
              </section>
            );

          case Section.Experience:
            return experienceData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Experience</h2>
                {experienceData.map((exp, idx) => (
                  <ExperienceEntry key={idx} experience={exp} />
                ))}
              </section>
            ) : null;

          case Section.Talk:
            return talkData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Talks</h2>
                {englishTalks.map((talk, idx) => (
                  <TalkEntry key={idx} talk={talk} hideLink />
                ))}
              </section>
            ) : null;

          case Section.Research_Fellowship:
            return researchFellowshipData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Grant</h2>
                {researchFellowshipData.map((rf, idx) => (
                  <ResearchFellowshipEntry key={idx} researchFellowship={rf} hideLink useEnglish />
                ))}
              </section>
            ) : null;

          case Section.Others:
            return othersData.length ? (
              <section key={sectionName} className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Others</h2>
                {othersData.map((other, idx) => (
                  <OthersEntry key={idx} others={other} hideLink />
                ))}
              </section>
            ) : null;

          default:
            return null;
        }
      })}
    </div>
  );
}
