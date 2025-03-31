'use client';

import Intro from '@/components/Intro';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedSection from '@/components/ui/animated-section';
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Intro Section */}
        <div id="intro-container">
            <Intro />
        </div>

        {/* Services Section */}
        <AnimatedSection delay={0.2} className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:p-10">
            <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
              <div>
                <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                  Services I <span className="text-primary">Offered</span>
                </h2>
                <p className="mt-4 text-lg text-black dark:text-light/70 lg:mt-6 lg:text-2xl">
                  Transforming Ideas into Innovative Reality, Elevate Your Vision with
                  My Expert
                  <span className="font-bold text-dark dark:text-white">
                    {' '}Branding{' '}
                  </span>
                  Services!
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

            {/* Service cards */}
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
              {/* UI/UX Design */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                    <path d="M56 24H24v32" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">UI/UX Design</p>
              </div>

              {/* Social Media Management */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Social Media Management</p>
              </div>

              {/* Photography */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M13.333 18.667H16a5.334 5.334 0 0 0 5.333-5.334A2.667 2.667 0 0 1 24 10.667h16a2.667 2.667 0 0 1 2.667 2.666A5.333 5.333 0 0 0 48 18.667h2.667A5.334 5.334 0 0 1 56 24v24a5.333 5.333 0 0 1-5.333 5.333H13.333A5.333 5.333 0 0 1 8 48V24a5.333 5.333 0 0 1 5.333-5.333Z" />
                    <path d="M24 34.667a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Photography</p>
              </div>

              {/* Branding */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44" />
                    <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56" />
                    <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Branding</p>
              </div>

              {/* Web Development */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Web Development</p>
              </div>

              {/* Motion Design */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="m49.621 47.333-10.4.715h-.072a36.88 36.88 0 0 0-9.925 2.208l-6.696 2.421a10.962 10.962 0 0 1-8.765-.576 10.188 10.188 0 0 1-5.28-6.738l-3.67-16.134a9.784 9.784 0 0 1 1.43-7.626 10.57 10.57 0 0 1 6.637-4.43l30-6.277c5.699-1.195 11.325 2.267 12.568 7.733l3.741 16.432a9.806 9.806 0 0 1-1.858 8.23 10.686 10.686 0 0 1-7.707 4.032v.005l-.003.005Z" />
                    <path d="M24 26.667 27.221 40l11.446-10.667L24 26.667Z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Motion Design</p>
              </div>

              {/* Graphic Design */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M278.017 10.729c.59.59 1.39 1.8.2 3.32l-36.88 46.71-13.23-13.43 46.6-36.79c.57-.45 1.1-.62 1.57-.62.77 0 1.38.45 1.74.81zm-174.19 135.27l38.62 39.19a27.543 27.543 0 01-16.38 6.64 27.52 27.52 0 01-21.11-8.03 27.58 27.58 0 01-8.04-21.11c.37-6.22 2.84-12.09 6.91-16.69z"/>
                    <path d="M85.017 203.739c6.06 6.05 9.37 14.11 9.32 22.67-.04 8.39-3.34 16.21-9.28 22.02-10.89 10.66-20.98 13.94-30.74 17.12-10.71 3.48-21.77 7.08-32.43 19.75-1.45-3.23-3.33-9.85-3.69-20.14-.39-11.39.97-40.16 22.1-61.43v-.01c5.92-5.96 13.82-9.25 22.25-9.27h.06c8.46 0 16.42 3.3 22.41 9.29z"/>
                    <path d="M220.787 53.109l14.76 14.98-86.55 109.63-37.66-38.2z"/>
                    <path d="M109.677 198.729l-9.5 9.5a41.825 41.825 0 00-8.16-11.49c-3.4-3.4-7.29-6.14-11.5-8.15l9.5-9.51c1.86 4.33 4.53 8.32 7.93 11.72 3.4 3.41 7.4 6.07 11.73 7.93z"/>
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Graphic Design</p>
              </div>

              {/* Visualization */}
              <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                    <path d="M26.667 32a5.333 5.333 0 1 0 10.666 0 5.333 5.333 0 0 0-10.666 0Z" />
                    <path d="M56 32c-6.4 10.667-14.4 16-24 16S14.4 42.667 8 32c6.4-10.667 14.4-16 24-16s17.6 5.333 24 16Z" />
                  </svg>
                </div>
                <p className="mt-3 text-base font-medium text-dark dark:text-light/70">Visualization</p>
              </div>
            </div>

            {/* Image */}
            <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-light dark:bg-dark-2 lg:mt-14">
              <Image
                src="/assets/img/keepcalm.png"
                alt="Keep Calm and Be Awesome"
                width={1920}
                height={1080}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Motion Design Video Section */}
            <div className="mt-10 lg:mt-14">
              <div className="mt-8 relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/evagoh3n1j4"
                  title="Motion Design for DJ Triggered"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-10 lg:mt-14">
              <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                Frequently Asked Questions
              </h3>

              <div className="mt-8 space-y-4">
                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(0)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 0 ? 'text-primary' : 'text-black dark:text-white'}`}>
                        What services do you offer?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 0 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        I specialize in graphic design, photography, web development, and motion design,
                        providing comprehensive creative solutions for various projects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(1)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 1 ? 'text-primary' : 'text-black dark:text-white'}`}>
                        Do you offer packages or bundled services?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 1 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        Yes, I offer customized packages that combine multiple services, such as branding and web development,
                        to provide a cohesive solution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(2)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 2 ? 'text-primary' : 'text-black dark:text-white'}`}>
                        How can I get in touch to discuss a project?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 2 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        You can contact me through the <a href="/contact" className="text-primary hover:underline">contact form</a> on my website, or email me at <a href="mailto:dmyproduct@gmail.com" className="text-primary hover:underline">dmyproduct@gmail.com</a>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(3)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 3 ? 'text-primary' : 'text-black dark:text-white'}`}>
                        Do you work with clients remotely or only locally?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 3 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        I work with clients both locally and worldwide, utilizing online communication tools to collaborate effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(4)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 4 ? 'text-primary' : 'text-black dark:text-white'}`}>
                        Can you accommodate urgent or rush projects?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 4 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        I can sometimes accommodate rush projects depending on my current workload. Please contact me to discuss your timeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-b border-border bg-card text-card-foreground shadow-sm">
                  <div>
                    <button 
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      onClick={() => toggleFaq(5)}
                    >
                      <h4 className={`text-xl font-medium transition-colors ${openFaq === 5 ? 'text-primary' : 'text-dark dark:text-light'}`}>
                        What is your revision policy?
                      </h4>
                      <div className={`h-6 w-6 shrink-0 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === 5 ? 'block' : 'hidden'}`}>
                      <p className="text-black dark:text-white text-black-foreground">
                        I offer a reasonable number of revisions to ensure you're completely satisfied with the final product.
                        The exact number of revisions depends on the project scope and is outlined in the project agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
} 