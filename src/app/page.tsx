import NavbarBeta from "@/components/navbar-beta";
import leaf from "@/assets/leaf.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <NavbarBeta />
      <section className="relative">
        <Image
          src={leaf}
          alt=""
          width={500}
          className="absolute right-0 top-0 z-0 mt-10"
        />
        <div className="text-[150px] leading-[150px] font-bold pt-40 z-10 relative">
          A <span className="text-green-600">GREEN</span> FUTURE AWAITS
        </div>
        <div className="text-xl mt-4">
          With GreenWave, track power savings data, manage waste disposal
          efficiently, and ask queries from a powerful chatbot.
        </div>
      </section>
    </main>
  );
}
