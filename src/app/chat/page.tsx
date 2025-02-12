import Navbar from "@/components/navbar";
import { Textarea } from "@/components/ui/textarea";

export default function Chat() {
  return (
    <main className="w-5/6 mx-auto h-[80dvh]">
      <Navbar />
      <section className="h-full flex flex-col justify-between">
        <div></div>
        <Textarea
          placeholder="Type your message here."
          className="w-4/6 mx-auto"
        />
      </section>
    </main>
  );
}
