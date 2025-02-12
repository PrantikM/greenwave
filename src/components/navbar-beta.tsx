import Link from "next/link";

export default function NavbarBeta() {
  return (
    <header className="flex justify-between">
      <Link
        href={"/"}
        className="text-green-600 font-serif text-5xl my-4 font-bold"
      >
        GreenWave
      </Link>
      <div className="m-4 flex flex-row">
        <Link href={"/register"} className="text-lg m-4">
          Sign Up
        </Link>
        <Link
          href={"/login"}
          className="text-lg bg-green-600 px-4 py-2 m-2 text-center align-middle"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
