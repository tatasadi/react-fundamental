"use client";

import CodeSnippet from "../components/CodeSnippet";
import { FormsV1, FormsV2, FormsV3, FormsV4 } from "../components/Forms";

export default function FormsPage() {
  return (
    <main className="">
      <h2 className="text-center p-4">Forms</h2>
      <div className="grid grid-cols-3">
        <CodeSnippet name="forms" className="col-span-2" />
        <div>
          <hr />
          <h3 className="text-center mt-4">Basic forms</h3>
          <FormsV1 />
          <hr />
          <h3 className="text-center mt-4">Using refs</h3>
          <FormsV2 />
          <hr />
          <h3 className="text-center mt-4">Validation</h3>
          <FormsV3 />
          <hr />
          <h3 className="text-center mt-4">Control the input value</h3>
          <FormsV4 />
          <hr />
        </div>
      </div>
    </main>
  );
}
