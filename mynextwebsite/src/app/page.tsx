'use client';

import Image from "next/image";
import Link from "next/link";
import Intro from '@/components/Intro';
import AnimatedSection from '@/components/ui/animated-section';
import ExpertArea from '@/components/ExpertArea';
import Services from '@/components/Services';
import PhotographyPortfolio from '@/components/PhotographyPortfolio';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import ContactMarquee from '@/components/ContactMarquee';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-2xl justify-between flex-col gap-2 p-2 lg:gap-3 lg:p-3">
      <main className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-3">
        {/* Intro Section */}
        <div id="intro-container">
          <AnimatedSection className="mb-0">
            <Intro />
          </AnimatedSection>
        </div>

        {/* Photography Portfolio Section */}
        <AnimatedSection delay={0.2}>
          <PhotographyPortfolio />
        </AnimatedSection>

        {/* Expert Area Section */}
        <AnimatedSection delay={0.4}>
          <ExpertArea />
        </AnimatedSection>

        {/* Services Section */}
        <div className="col-span-full lg:col-span-2 lg:row-start-4">
          <AnimatedSection delay={0.6}>
            <Services />
          </AnimatedSection>
        </div>
       
        {/* Latest Blog Posts Section */}
        <div className="lg:col-start-3 lg:row-span-2 lg:row-start-4">
          <AnimatedSection delay={0.7}>
            <LatestBlogPosts />
          </AnimatedSection>
        </div>

        {/* Contact Section with Marquee */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-5">
          <AnimatedSection delay={0.8}>
            <ContactMarquee />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}
