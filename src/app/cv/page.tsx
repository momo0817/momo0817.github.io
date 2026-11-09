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
import { Awards } from "@/components/awards";
import { awardData, getEnglishAwards } from "@/data/award";
import { researchFellowshipData } from "@/data/research-fellowship";
import { ResearchFellowshipEntry } from "@/components/reseach-fellowship";
import { OthersEntry } from "@/components/others";
import { othersData } from "@/data/others";
import { sectionOrder, Section } from "@/data/section-order";
import styles from "./cv.module.css";

export default function CVPage() {
  const englishPubs = getEnglishPublications();
  const englishTalks = getEnglishTalks();
  const englishAwards = getEnglishAwards();

  return (
    <article className={styles.page}>
      {/* Mount page settings with this route so other pages keep their print defaults. */}
      <style media="print">{"@page { size: A4; margin: 15mm 20mm; }"}</style>
      <div className={styles.toolbar}>
        <button type="button" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>
      {/* 名前・学年セクション */}
      <header className={styles.header}>
        <p className={styles.label}>CV</p>
        <h1>{aboutMe.name}</h1>
        <p className="text-sm text-gray-600">
          {aboutMe.title} at {aboutMe.institution} in Japan.
        </p>
        {sectionOrder.includes(Section.Contact_Information) && (
          <section className={styles.contact}>
            <h2 className={styles.contactHeading}>Contact Information</h2>
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
        )}
        {aboutMe.researchInterest && (
          <div className={styles.interests}>
            <h2>Research Interest</h2>
            <p>{aboutMe.researchInterest}</p>
          </div>
        )}
      </header>

      {/* 各セクション */}
      {sectionOrder.map((sectionName) => {
        switch (sectionName) {
          case Section.Contact_Information:
            return null;
          case Section.Education:
            return educationData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Education</h2>
                <div className={styles.entries}>
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
              "article",
              "other",
            ];
            return (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Publications</h2>
                {typeOrder.map((type) => {
                  const pubs = groupedPubs[type];
                  if (!pubs || !pubs.length) return null;
                  return (
                    <div key={type} className={styles.publicationGroup}>
                      <h3 className={styles.subheading}>
                        {publicationTypeLabels[type]?.en || type}
                      </h3>
                      <ol className={styles.publications}>
                        {pubs.map((pub, idx) => (
                          <PublicationEntry
                            key={idx}
                            publication={pub}
                            hideLinks
                            showJapaneseTitle
                          />
                        ))}
                      </ol>
                    </div>

                  );
                })}
              </section>
            );

          case Section.Experience:
            return experienceData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Experience</h2>
                <div className={styles.entries}>
                  {experienceData.map((exp, idx) => (
                    <ExperienceEntry key={idx} experience={exp} />
                  ))}
                </div>
              </section>
            ) : null;

          case Section.Talk:
            return talkData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Talks</h2>
                <div className={styles.entries}>
                  {englishTalks.map((talk, idx) => (
                    <TalkEntry key={idx} talk={talk} hideLink />
                  ))}
                </div>
              </section>
            ) : null;

          case Section.Award:
            return awardData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Awards</h2>
                <Awards awards={englishAwards} hideLink className={styles.entries} />
              </section>
            ) : null;

          case Section.Research_Fellowship:
            return researchFellowshipData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Grant</h2>
                <div className={styles.entries}>
                  {researchFellowshipData.map((rf, idx) => (
                    <ResearchFellowshipEntry key={idx} researchFellowship={rf} hideLink useEnglish />
                  ))}
                </div>
              </section>
            ) : null;

          case Section.Others:
            return othersData.length ? (
              <section key={sectionName} className={styles.section}>
                <h2 className={styles.heading}>Others</h2>
                <div className={styles.entries}>
                  {othersData.map((other, idx) => (
                    <OthersEntry key={idx} others={other} hideLink />
                  ))}
                </div>
              </section>
            ) : null;

          default:
            return null;
        }
      })}
    </article>
  );
}
