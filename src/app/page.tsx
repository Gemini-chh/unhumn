import { AmbientBackground } from "@/components/AmbientBackground";
import { DreamHero } from "@/components/DreamHero";
import { ExperimentDrift } from "@/components/ExperimentDrift";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MemoryGallery } from "@/components/MemoryGallery";
import { MissingLetter } from "@/components/MissingLetter";
import { OpeningVeil } from "@/components/OpeningVeil";
import { Reveal } from "@/components/Reveal";
import { SignalFooter } from "@/components/SignalFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <AmbientBackground />
        <OpeningVeil />
        <SiteHeader />

        <main>
          <DreamHero />

          <Reveal>
            <MemoryGallery />
          </Reveal>

          <Reveal>
            <ExperimentDrift />
          </Reveal>

          <Reveal>
            <MissingLetter />
          </Reveal>

          <Reveal>
            <SignalFooter />
          </Reveal>
        </main>
      </div>
    </LanguageProvider>
  );
}
