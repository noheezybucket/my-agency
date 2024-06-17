import { cn } from "@/utils/cn";
import { LampDemo } from "../components/Hero";

export default function Home() {
  return (
    <main className={cn("dark:bg-bg dark:text-white grain")}>
      <LampDemo />

      <section >
        <div className="mx-auto w-10/12 rounded-lg h-[50vh]">
          <h2 className="big-title text-center">A propos de nous...</h2>
        </div>
      </section>

      <section >
        <div className="mx-auto w-10/12 rounded-lg h-[50vh]">
          <h2 className="big-title text-center">Services</h2>
        </div>
      </section>

      <section >
        <div className="mx-auto w-10/12 rounded-lg h-[50vh]">
          <h2 className="big-title text-center">Réalisati</h2>
        </div>
      </section>

      <section >
        <div className="mx-auto w-10/12 rounded-lg h-[50vh]">
          <h2 className="big-title text-center">Contact</h2>
        </div>
      </section>
    </main>
  );
}
