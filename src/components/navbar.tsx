import Image from "next/image";
import pfp from "@/assets/pfp.webp";
import { logout } from "@/actions/auth";

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <div className="text-green-600 font-serif text-5xl my-4 font-bold">
        GreenWave
      </div>
      <div className="m-4 flex flex-row">
        <button className="text-lg m-4" onClick={logout}>
          Log Out
        </button>
        <Image
          src={pfp}
          alt=""
          height={50}
          className="rounded-full mx-4 mb-3 mt-1"
        />
      </div>
    </header>
  );
}
