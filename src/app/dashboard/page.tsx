import Navbar from "@/components/navbar";

export default function Dashboard() {
  return (
    <main className="w-5/6 mx-auto">
      <Navbar />
      <section className="flex justify-between mt-40">
        <a
          href=""
          target="_blank"
          className="w-[30%] border-[1px] border-gray-400 p-8 hover:border-gray-50 hover:text-green-600 transition"
        >
          <h2 className="text-4xl font-semibold ">GREEN CHAT</h2>
        </a>
        <a
          href="https://greenwave.streamlit.app/"
          target="_blank"
          className="w-[30%] border-[1px] border-gray-400 p-8 hover:border-gray-50 hover:text-green-600 transition"
        >
          <h2 className="text-4xl font-semibold">APPLIANCE FAULT DETECTOR</h2>
        </a>
        <a
          href="https://github.com/PrantikM/wastesorter"
          target="_blank"
          className="w-[30%] border-[1px] border-gray-400 p-8 hover:border-gray-50 hover:text-green-600 transition"
        >
          <h2 className="text-4xl font-semibold">WASTE MANAGER</h2>
        </a>
      </section>
    </main>
  );
}
