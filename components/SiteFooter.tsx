import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 pb-20 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © 2026 {profile.name}. Built with Next.js, deployed on Vercel.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-fg" aria-label="Email">
            <MailIcon className="size-5" />
          </a>
          <a href={profile.phoneHref} className="hover:text-fg" aria-label={`Call ${profile.phone}`}>
            <PhoneIcon className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg" aria-label="LinkedIn">
            <LinkedInIcon className="size-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg" aria-label="GitHub">
            <GitHubIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
