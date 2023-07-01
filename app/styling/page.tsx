"use client";

import CodeSnippet from "../components/CodeSnippet";
import Styling from "../components/Styling";

export default function StylingPage() {
  return (
    <main className="">
      <h2 className="text-center p-4">Styling</h2>
      <div className="grid grid-cols-2">
        <CodeSnippet name="styling" />
        <Styling />
      </div>
    </main>
  );
}
