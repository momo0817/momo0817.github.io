import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { TalkEntry } from "@/components/talk-entry";
import { ResearchFellowshipEntry } from "@/components/reseach-fellowship";
import { experienceData } from "@/data/experience";
import { talkData } from "@/data/talk";
import { researchFellowshipData } from "@/data/research-fellowship";
// import { PortfolioEntry } from "@/components/portfolio-entry";
// import { portfolioData } from "@/data/portfolio";
import { OthersEntry } from "@/components/others";
import { othersData } from "@/data/others";
import { sectionOrder, Section } from "@/data/section-order";
import { Publication, publicationTypeLabels, PublicationType } from "@/data/publication";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            <p
              className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
              dangerouslySetInnerHTML={{ __html: aboutMe.description + (aboutMe.researchInterest ? "<br>" + aboutMe.researchInterest : "")  }}
            />
            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  if (publicationData.length === 0) return null;
                  
                  // typeでグループ化
                  const groupedPubs: Record<string, Publication[]> = {};
                  publicationData.forEach(pub => {
                    if (!groupedPubs[pub.type]) {
                      groupedPubs[pub.type] = [];
                    }
                    groupedPubs[pub.type].push(pub);
                  });
                  
                  // 表示順序
                  const typeOrder = [
                    "international-conference-peer-reviewed",
                    "journal-peer-reviewed",
                    "international-conference-peer-reviewed-workshop",
                    "domestic-conference-non-peer-reviewed",
                    "domestic-symposium-non-peer-reviewed",
                    "preprint",
                    "article",
                    "other"
                  ];
                  
                  return (
                    <section key={sectionName}>
                      <h2 className="font-serif text-l mb-12 tracking-wide uppercase">
                        Publications
                      </h2>
                      
                      {typeOrder.map(type => {
                        const pubs = groupedPubs[type];
                        if (!pubs || pubs.length === 0) return null;
                        
                        return (
                          <div key={type} className="mb-16">
                            {/* カテゴリ見出し */}
                            <h3 className="font-serif text-l mb-8 tracking-wide italic font-medium text-zinc-700">
                              {publicationTypeLabels[type as PublicationType]?.en || type}
                            </h3>
                            
                            {/* 論文リスト */}
                            <div className="space-y-12">
                              {pubs.map((publication, index) => (
                                <div key={index}>
                                  <PublicationEntry publication={publication} />
                                  {index < pubs.length - 1 && (
                                    <div className="h-px bg-zinc-200 my-8" />
                                  )}
                                </div>
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
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry key={index} experience={experience} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Talk:
                  return (
                    talkData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Talks
                        </h2>
                        <div className="space-y-12">
                          {talkData.map((talk, index) => (
                            <TalkEntry key={index} talk={talk} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Research_Fellowship:
                  return (
                    researchFellowshipData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Grant
                        </h2>
                        <div className="space-y-12">
                          {researchFellowshipData.map((researchFellowship, index) => (
                            <ResearchFellowshipEntry key={index} researchFellowship={researchFellowship} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Others:
                  return (
                    othersData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Others
                        </h2>
                        <div className="space-y-12">
                          {othersData.map((others, index) => (
                            <OthersEntry key={index} others={others} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                // case Section.Portfolio:
                //   return (
                //     portfolioData.length > 0 && (
                //       <section key={sectionName}>
                //         <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                //           Portfolio
                //         </h2>
                //         <div className="space-y-12">
                //           {portfolioData.map((portfolio, index) => (
                //             <PortfolioEntry key={index} portfolio={portfolio} />
                //           ))}
                //         </div>
                //       </section>
                //     )
                //   );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
