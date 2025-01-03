import { cn } from "@/utils/cn";
import {Hero} from "@/components/Hero";
import AboutSection from "@/components/about-us/about-section";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";



export default function Home() {
  return (
      <main className={cn("dark:text-white grain space-y-32")}>

          <Hero/>
          <AboutSection/>
          <Services/>
          <Portfolio/>

          {/*<section >*/}
          {/*  <div className="mx-auto w-10/12 rounded-lg h-[50vh]">*/}
          {/*    <h2 className="big-title text-center">Contact</h2>*/}
          {/*  </div>*/}
          {/*</section>*/}

          <div className={'h-[5vh]'}></div>

      </main>
  );
}
