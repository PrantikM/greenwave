import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      Dashboard
      <Link href={"/chat"}>Chat</Link>
      <Link href={"/waste"}>Waste Management</Link>
      <Link href={"/power"}>Power</Link>
    </main>
  );
}
