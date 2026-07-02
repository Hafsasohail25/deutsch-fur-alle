import { Hero } from "@/components/sections/hero";
import { WhyLearnGerman } from "@/components/sections/why-learn-german";
import { CourseLevels } from "@/components/sections/course-levels";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { StudentStats } from "@/components/sections/student-stats";
import { GermanyOpportunities } from "@/components/sections/germany-opportunities";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyLearnGerman />
      <CourseLevels />
      <WhyChooseUs />
      <StudentStats />
      <GermanyOpportunities />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
