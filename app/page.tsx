import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="card">
        <Link href="/styling">Styling</Link>
      </div>
      <div className="card">
        <Link href="/forms">Forms</Link>
      </div>
    </main>
  );
}
