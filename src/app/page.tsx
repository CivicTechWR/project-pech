import { Header } from "@/components/index-page/sections/Header";
import { Hero } from "@/components/index-page/sections/Hero";
import { Statistics } from "@/components/index-page/sections/Statistics";
import { Goal } from "@/components/index-page/sections/Goal";
import { DataSection } from "@/components/index-page/sections/DataSection";
import { CommunitySpotlight } from "@/components/index-page/sections/CommunitySpotlight";
import { Footer } from "@/components/index-page/sections/Footer";
import { TownHall } from "@/components/index-page/sections/TownHall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Goal />
        <DataSection />
        <CommunitySpotlight />
        <TownHall />
      </main>
      <Footer />
    </>
  );
}
