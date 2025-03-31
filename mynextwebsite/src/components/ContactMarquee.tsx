import Link from 'next/link';

export default function ContactMarquee() {
  return (
    <div className="h-full rounded-2xl bg-white p-4 shadow dark:bg-black dark:shadow-dark">
      <div className="group flex gap-4 overflow-hidden rounded-lg bg-light dark:bg-dark-2 p-4">
        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-4 group-hover:[animation-play-state:paused]">
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Available For Hire 🚀 Crafting Digital Experiences 🎨
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Web Development  💻  Branding  🎨  Video Editing  🎥
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Available For Hire 🚀 Crafting Digital Experiences 🎨
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Web Development  💻  Branding  🎨  Video Editing  🎥
          </span>
        </div>
        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-4 group-hover:[animation-play-state:paused]">
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Available For Hire 🚀 Crafting Digital Experiences 🎨
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Web Development  💻  Branding  🎨  Video Editing  🎥
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Available For Hire 🚀 Crafting Digital Experiences 🎨
          </span>
          <span className="relative inline-block whitespace-nowrap text-base font-medium text-muted transition before:mr-2 before:content-['\2022']">
            Web Development  💻  Branding  🎨  Video Editing  🎥
          </span>
        </div>
      </div>
      <h2 className="mt-3 text-center justify-center text-3xl font-semibold leading-snug text-dark dark:text-light flex">
        Let's Work Together 👋
      </h2>

      <Link href="/contact" className="mt-3 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
        <span className="justify-center text-center">Let's Talk</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
          <path d="M17.5 11.667v-5h-5" />
          <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
        </svg>
      </Link>
    </div>
  );
}