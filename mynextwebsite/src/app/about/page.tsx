import Intro from '@/components/Intro';
import Image from 'next/image';
import Counter from '@/components/Counter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AnimatedSection from '@/components/ui/animated-section';

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Intro Section */}
        <div id="intro-container">
          <Intro />
        </div>

        {/* About Section */}
        <AnimatedSection delay={0.2} className="lg:col-span-2">
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
          <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold text-dark dark:text-muted lg:text-[40px]">
                Hi, This Is <span className="text-primary">Duhon Young</span> 👋
              </h2>
              <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                A Passionate
                <span className="font-semibold text-dark dark:text-white">
                  {' '}Full Stack Developer{' '}
                </span>
                🖥️ &
                <span className="font-semibold text-dark dark:text-white">
                  {' '}Server Administrator{' '}
                </span>
                with
                <span className="font-semibold text-dark dark:text-white">
                  {' '}9+ years{' '}
                </span>
                of Experience
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span>Available For Hire</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
            <div className="flex flex-wrap items-start gap-6 lg:gap-10">
              <div>
                <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                  <Counter target={8} duration={2000} />+
                </h2>
                <p className="mt-2 text-muted">Years of Experience</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                  <Counter target={27} duration={2000} />+
                </h2>
                <p className="mt-2 text-muted">Project Completed</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                  <Counter target={24} duration={2000} />+
                </h2>
                <p className="mt-2 text-muted">Happy Clients</p>
              </div>
            </div>

            <div className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
              <Image
                src="/assets/img/circle-text.svg"
                alt="Scroll Down"
                width={100}
                height={100}
                className="absolute inset-0 h-full w-full animate-spin-slow dark:block"
              />
              <Image
                src="/assets/img/circle-text-light.svg"
                alt=""
                width={100}
                height={100}
                className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"
              />
              <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-10 w-10"
                >
                  <path d="M20 5v30m-5-5 5 5 5-5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="mt-10 lg:mt-14">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">My Expertise</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-light rounded-lg shadow-lg dark:bg-dark-2">
                <h5 className="font-medium text-dark dark:text-light">Full Stack Development</h5>
                <p className="text-muted mt-2">Experienced in both front-end and back-end development using modern technologies.</p>
              </div>
              <div className="p-6 bg-light rounded-lg shadow-lg dark:bg-dark-2">
                <h5 className="font-medium text-dark dark:text-light">Graphic Design</h5>
                <p className="text-muted mt-2">Proficient in Adobe Creative Suite, delivering visually compelling designs.</p>
              </div>
              <div className="p-6 bg-light rounded-lg shadow-lg dark:bg-dark-2">
                <h5 className="font-medium text-dark dark:text-light">SEO & Digital Marketing</h5>
                <p className="text-muted mt-2">Helping businesses grow online by improving search engine rankings and visibility.</p>
              </div>
            </div>
          </div>

          {/* How I Work Section */}
          <div className="mt-10 lg:mt-14">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
              My Process for Amazing Results 🛠️
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1: Research */}
              <div className="text-center">
                <div className="grid place-content-center h-16 w-16 bg-primary rounded-full text-light mx-auto lg:h-20 lg:w-20">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h4 className="mt-4 text-lg font-medium text-dark dark:text-light">Research</h4>
                <p className="mt-2 text-sm text-muted dark:text-light/70">
                  I begin by thoroughly understanding your brand, goals, and target audience to ensure the project is aligned with your vision.
                </p>
              </div>

              {/* Step 2: Planning */}
              <div className="text-center">
                <div className="grid place-content-center h-16 w-16 bg-primary rounded-full text-light mx-auto lg:h-20 lg:w-20">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h4 className="mt-4 text-lg font-medium text-dark dark:text-light">Planning</h4>
                <p className="mt-2 text-sm text-muted dark:text-light/70">
                  I outline a strategic plan that includes timelines, project milestones, and the necessary resources to achieve the desired outcome.
                </p>
              </div>

              {/* Step 3: Design & Develop */}
              <div className="text-center">
                <div className="grid place-content-center h-16 w-16 bg-primary rounded-full text-light mx-auto lg:h-20 lg:w-20">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h4 className="mt-4 text-lg font-medium text-dark dark:text-light">Design & Develop</h4>
                <p className="mt-2 text-sm text-muted dark:text-light/70">
                  I bring ideas to life with creative designs and clean, functional code, ensuring a great user experience across all devices.
                </p>
              </div>

              {/* Step 4: Launch & Deliver */}
              <div className="text-center">
                <div className="grid place-content-center h-16 w-16 bg-primary rounded-full text-light mx-auto lg:h-20 lg:w-20">
                  <span className="text-3xl font-bold">4</span>
                </div>
                <h4 className="mt-4 text-lg font-medium text-dark dark:text-light">Launch & Deliver</h4>
                <p className="mt-2 text-sm text-muted dark:text-light/70">
                  After testing and revisions, I launch the final product, provide documentation, and offer support to ensure smooth sailing post-launch.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-10 lg:mt-14">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl mb-8">
              Trusted By 20+ Clients
            </h3>

            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full relative px-12"
            >
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1">
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                        </div>
                        <a
                          href="https://www.nbcareercenter.net"
                          className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                        >
                          <span>nbcareercenter.net</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 15"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            className="h-3 w-3"
                          >
                            <path d="M13.5 1.5h-12v12M1.5 1.5l12 12" />
                          </svg>
                        </a>
                      </div>
                      <blockquote className="text-muted dark:text-light/70">
                        "Duhon delivered an outstanding website for our career center. The user-friendly design and functionality have significantly increased our traffic and profits. Their professionalism and attention to detail made the entire process seamless. Highly recommend!"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10">
                          <Image src="/assets/img/avatar1.jpg" alt="Client" width={40} height={40} className="h-full w-full rounded-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-dark dark:text-light">Alteata Fox</h4>
                          <p className="text-sm text-muted">Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-full">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1">
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                        </div>
                        <a
                          href="https://www.djtriggered.online"
                          className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                        >
                          <span>djtriggered.online</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 15"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            className="h-3 w-3"
                          >
                            <path d="M13.5 1.5h-12v12M1.5 1.5l12 12" />
                          </svg>
                        </a>
                      </div>
                      <blockquote className="text-muted dark:text-light/70">
                        "Duhon is a true professional. He created a stunning website for my DJ business that has helped me attract more clients and grow my brand. His attention to detail and creativity is unmatched. I highly recommend them for all your web design needs."
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10">
                          <Image src="/assets/img/avatar2.jpg" alt="Client" width={40} height={40} className="h-full w-full rounded-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-dark dark:text-light">Trevor Greer</h4>
                          <p className="text-sm text-muted">DJ Triggered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-full">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1">
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                          <Image src="/assets/img/star-full.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                        </div>
                        <a
                          href="https://nbenterpriseintl.net"
                          className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black"
                        >
                          <span>nbenterprisesintl.net</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 15"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            className="h-3 w-3"
                          >
                            <path d="M13.5 1.5h-12v12M1.5 1.5l12 12" />
                          </svg>
                        </a>
                      </div>
                      <blockquote className="text-muted dark:text-light/70">
                        "Duhon revamped our website at New Beginning Enterprises and the results have been fantastic. The sleek design and improved functionality have attracted more visitors and enhanced our credibility. We couldn't be more pleased with their expertise and dedication!"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10">
                          <Image src="/assets/img/avatar3.png" alt="Client" width={40} height={40} className="h-full w-full rounded-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-dark dark:text-light">Paulette K. Broach</h4>
                          <p className="text-sm text-muted">CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
        </AnimatedSection>
      </main>
    </div>
  );
} 