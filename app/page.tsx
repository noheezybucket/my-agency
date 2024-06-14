import { cn } from "@/utils/cn";
import { AuroraBackgroundDemo } from "../components/Hero";

export default function Home() {
  return (
    <main>
      <AuroraBackgroundDemo />
      <section className={cn("dark:bg-bg")}>
        <div className="mx-auto w-10/12 rounded-lg h-[100vh]"></div>
      </section>
    </main>
  );
}
