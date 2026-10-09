import { NewsEntry } from "@/components/news-entry";
import { ProfileSection } from "@/components/profile-section";
import { SiteNav } from "@/components/site-nav";
import { aboutMe } from "@/data/aboutme";
import { newsData } from "@/data/news";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="mx-auto max-w-4xl px-6 pt-4 pb-12 md:px-8 md:pt-6 md:pb-16">
        <section className="flex min-h-screen flex-col gap-10">
          <SiteNav />

          <ProfileSection aboutMe={aboutMe} />

          <div id="about" className="scroll-mt-16 space-y-10">
            <p
              className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
              dangerouslySetInnerHTML={{
                __html:
                  aboutMe.description +
                  (aboutMe.researchInterest
                    ? "<br>" + aboutMe.researchInterest
                    : ""),
              }}
            />

            <section>
              <h2 className="font-serif text-lg mb-6 tracking-wide uppercase">
                News
              </h2>
              <div className="space-y-7">
                {newsData.map((news, index) => (
                  <div key={index}>
                    <NewsEntry news={news} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
