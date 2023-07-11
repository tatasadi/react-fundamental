"use client"

import CodeSnippet from "../../components/CodeSnippet"
import { LocalStorage } from "../../components/LocalStorage"

export default function UseLocalStoragePage() {
  return (
    <main className="">
      <h2 className="text-center p-4">Use Local Storage</h2>
      <div className="grid grid-cols-3">
        <CodeSnippet name="use-local-storage" className="col-span-2" />
        <div>
          <hr />
          <LocalStorage initianlFirstname="Ehsan" />
          <hr />
        </div>
      </div>
    </main>
  )
}
