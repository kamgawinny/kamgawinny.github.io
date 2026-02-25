import { Hero } from '@/components/sections/Hero';
import { Conviction } from '@/components/sections/Conviction';
import { Missions } from '@/components/sections/Missions';
import { Objections } from '@/components/sections/Objections';
import { Competences } from '@/components/sections/Competences';
import { MonADN } from '@/components/sections/MonADN';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <main className="relative">
        <div id="hero">
          <Hero />
        </div>
        <Conviction />
        <Missions />
        <Objections />
        <Competences />
        <MonADN />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
