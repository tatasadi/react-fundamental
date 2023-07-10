"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HooksLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <main>
      <div className="flex gap-4 p-4 flex-wrap">
        <div
          className={`card ${
            pathname.includes("use-local-storage") ? "card-active" : ""
          }`}
        >
          <Link href="/hooks/use-local-storage">useLocalStorage</Link>
        </div>
      </div>
      <hr />
      {children}
    </main>
  );
}
