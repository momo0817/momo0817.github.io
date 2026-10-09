import Image from "next/image";
import { CvButton } from "./cv-button";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0 flex-1">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-4">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase">
          <span>{aboutMe.title}</span>
          <span className="px-1.5 text-zinc-400">|</span>
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
      </div>

      <div className="flex shrink-0 items-start gap-5">
        {aboutMe.imageUrl && (
          <div className="relative h-28 w-28 overflow-hidden rounded-xl md:h-32 md:w-32">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="min-w-0 pt-1">
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
            {aboutMe.blogUrl && (
              <a
                href={aboutMe.blogUrl}
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span className="tracking-wider uppercase">Blog</span>
              </a>
            )}
            <CvButton cvUrl={aboutMe.cvUrl} />
          </div>
          <div className="space-y-1.5">
            <a
              href={`mailto:${aboutMe.email}`}
              className="inline-flex items-center gap-2 break-all text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={14} className="shrink-0" />
              {aboutMe.email}
            </a>
            {aboutMe.googleScholarUrl && (
              <>
                <br />
                <a
                  href={aboutMe.googleScholarUrl}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GraduationCap size={14} />
                  Google Scholar
                </a>
              </>
            )}
            {aboutMe.twitterUsername && (
              <>
                <br />
                <a
                  href={`https://twitter.com/${aboutMe.twitterUsername}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={14} />@{aboutMe.twitterUsername}
                </a>
              </>
            )}
            {aboutMe.githubUsername && (
              <>
                <br />
                <a
                  href={`https://github.com/${aboutMe.githubUsername}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </>
            )}
            {aboutMe.linkedinUsername && (
              <>
                <br />
                <a
                  href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
