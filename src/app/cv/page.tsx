// src/app/cv/page.tsx
"use client";
import { useRef } from "react";
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
  const cvRef = useRef<HTMLDivElement>(null);
  const englishPubs = getEnglishPublications();
  const englishTalks = getEnglishTalks();

  const handleDownloadPDF = async () => {
  if (!cvRef.current) return;

  type Html2Pdf = {
    from: (element: HTMLElement) => {
      set: (opt: {
        margin?: number;
        filename?: string;
        image?: { type?: string; quality?: number };
        html2canvas?: { scale?: number };
        jsPDF?: { unit?: string; format?: string; orientation?: string };
      }) => { save: () => void };
    };
  };

  const html2pdfModule = await import("html2pdf.js");
  const html2pdf = html2pdfModule.default as unknown as Html2Pdf;

  const opt = {
    margin: 0.5,
    filename: "CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf.from(cvRef.current).set(opt).save();
};



  return (
    <div ref={cvRef} className="min-h-screen bg-white text-black px-8 py-12">
      <button
        onClick={handleDownloadPDF}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Download PDF
      </button>

      {/* 名前・学年セクション */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">CV</h1>
        <h1 className="text-3xl font-bold">{aboutMe.name}</h1>
        <p className="text-sm text-gray-600">
          {aboutMe.title} at {aboutMe.institution} in Japan
        </p>
      </div>

      {/* 各セクション */}
      {sectionOrder.map((sectionName) => {
        switch (sectionName) {
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
                    <div key={type} className="mb-4">
                      <h3 className="italic font-medium">
                        {publicationTypeLabels[type]?.en || type}
                      </h3>
                      <div className="space-y-2">
                        {pubs.map((pub, idx) => (
                          <PublicationEntry key={idx} publication={pub} hideLinks />
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
