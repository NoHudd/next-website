import Intro from '@/components/Intro';
import Image from 'next/image';
import Link from 'next/link';
import MarqueeSection from '@/components/MarqueeSection';
import AnimatedSection from '@/components/ui/animated-section';

export default function PortfolioPage() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Intro Section */}
        <div id="intro-container">
          <Intro />
        </div>

        {/* Portfolio Section */}
        <AnimatedSection delay={0.2} className="lg:col-span-2">
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
              Check Out My Latest <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70">
              I'm here to help you bring your vision to life. Whether you need a custom-built website or unique design work,
              I'm passionate about creating solutions that fit your needs perfectly.
              Let's work together to make your project stand out and succeed!
            </p>
          </div>

          {/* Portfolio Items */}
          <div className="mt-10 lg:mt-14">
            <div className="mt-6 space-y-6">
              {/* Project 1 */}
              <div>
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                  <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <Image
                      src="/assets/img/NewBeginningCareerCenter.png"
                      alt="New Beginning Career Center - Virtual Call Center"
                      width={1920}
                      height={1080}
                      className="h-full w-full rounded-t-lg object-cover object-top transition"
                    />

                    <Link
                      href="/assets/img/NewBeginningCareerCenter.png"
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="h-6 w-6"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <Link
                        href="https://nbcareercenter.net/"
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                      >
                        New Beginning Career Center - Virtual Call Center
                      </Link>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      Website Design | Wireframe & Design
                    </p>
                  </div>

                  <Link
                    href="https://nbcareercenter.net/"
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                  >
                    <span>Visit Site</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0"
                    >
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                  <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <Image
                      src="/assets/img/triggered.png"
                      alt="Website Design | Wireframe & Design"
                      width={1920}
                      height={1080}
                      className="h-full w-full rounded-t-lg object-cover object-top transition"
                    />

                    <Link
                      href="/assets/img/triggered.png"
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="h-6 w-6"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <Link
                        href="https://djtriggered.online/"
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                      >
                        DJ Triggered - Online Website
                      </Link>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      UI Design | Wireframe
                    </p>
                  </div>

                  <Link
                    href="https://djtriggered.online/"
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                  >
                    <span>Visit Site</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0"
                    >
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div>
                <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                  <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <Image
                      src="/assets/img/paulettek.png"
                      alt="Paulette K. Broach - Life Coach & Mentor"
                      width={1920}
                      height={1080}
                      className="h-full w-full rounded-t-lg object-cover object-top transition"
                    />

                    <Link
                      href="/asset/img/paulettek.png"
                      className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="h-6 w-6"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                  <div>
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                      <Link
                        href="https://paulettekbroach.com/"
                        className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                      >
                        Paulette K. Broach - Life Coach & Mentor
                      </Link>
                    </h3>
                    <p className="text-sm text-muted lg:text-base">
                      UI Design | Website Design
                    </p>
                  </div>

                  <Link
                    href="https://paulettekbroach.com/"
                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                  >
                    <span>Visit Site</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0"
                    >
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <MarqueeSection />
        </div>
        </AnimatedSection>
      </main>
    </div>
  );
} 