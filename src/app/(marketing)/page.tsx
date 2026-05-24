'use client';

import { HeroSection } from '@/src/components/home/hero-section';
import { FeaturesSection } from '@/src/components/home/features-section';
import { WorkflowSection } from '@/src/components/home/workflow-section';
import { BenefitsSection } from '@/src/components/home/benefits-section';
import { TestimonialsSection } from '@/src/components/home/testimonials-section';
import { CTASection } from '@/src/components/home/cta-section';
import { Navbar } from '@/src/components/layout/navbar';
import { Footer } from '@/src/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <WorkflowSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
