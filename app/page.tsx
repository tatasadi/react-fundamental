import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-4 p-4 flex-wrap">
      <div className="card">
        <Link href="/styling">Styling</Link>
      </div>
      <div className="card">
        <Link href="/forms">Forms</Link>
      </div>
      <div className="card">
        <Link href="/hooks">Hooks</Link>
      </div>
    </main>
  );
}
