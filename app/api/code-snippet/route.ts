import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ status: 404 })

  return NextResponse.json(
    {
      code: codes[id],
    },
    { status: 200 }
  )
}

const codes = {
  styling: `
    function Button({
      size = "",
      className = "",
      style = {},
      children,
      ...otherProps
    }) {
      let myClassName = \`button $\{className\}\`;
      if (size) myClassName += \` button--$\{size\}\`;
      return (
        <button
          className={myClassName}
          style={{ fontStyle: "italic", ...style }}
          {...otherProps}
        >
          {children}
        </button>
      );
    }
    
    export default function Styling() {
      return (
        <div className="p-10">
          <div className="flex gap-4 items-center">
            <Button
              size="sm"
              className="underline"
              id="my-small-button"
              style={{ backgroundColor: "green" }}
            >
              Small Button
            </Button>
            <Button size="md" style={{ backgroundColor: "blue" }}>
              Medium Button
            </Button>
            <Button size="lg" style={{ backgroundColor: "red" }}>
              large Button
            </Button>
          </div>
        </div>
      );
    }
    
  `,
  forms: `
    import { useRef, useState } from "react";

    // Basic forms
    export function FormsV1() {
      function handleSubmit(event) {
        event.preventDefault();
        alert(\`Firstname is \${event.target.elements.firstname.value}\`);
      }

      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 p-4"
        >
          <div className="flex gap-2">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" />
          </div>
          <button type="submit" className="button disabled:bg-gray-400">
            Send
          </button>
        </form>
      );
    }

    // Using refs
    export function FormsV2() {
      const firstnameRef = useRef(null);

      function handleSubmit(event) {
        event.preventDefault();
        alert(\`Firstname is \${firstnameRef.current.value}\`);
      }

      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 p-4"
        >
          <div className="flex gap-2">
            <label htmlFor="firstname">First Name</label>
            <input ref={firstnameRef} id="firstname" type="text" />
          </div>
          <button type="submit" className="button disabled:bg-gray-400">
            Send
          </button>
        </form>
      );
    }

    // Validation
    export function FormsV3() {
      const [error, setError] = useState(null);

      function handleChange(event) {
        const { value } = event.target;
        const isLowerCase = value === value.toLowerCase();
        setError(isLowerCase ? null : "Firstname should be lower case");
      }

      function handleSubmit(event) {
        event.preventDefault();
        alert(\`Firstname is \${event.target.elements.firstname.value}\`);
      }

      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 p-4"
        >
          <div className="flex gap-2">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" onChange={handleChange} />
          </div>
          <div className="text-red-600">{error}</div>
          <button
            disabled={Boolean(error)}
            type="submit"
            className="button disabled:bg-gray-400"
          >
            Send
          </button>
        </form>
      );
    }

    // Control the input value
    export function FormsV4() {
      const [firstname, setFirstname] = useState("");

      function handleChange(event) {
        setFirstname(event.target.value.toLowerCase());
      }

      function handleSubmit(event) {
        event.preventDefault();
        alert(\`Firstname is \${firstname}\`);
      }
      
      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 p-4"
        >
          <div className="flex gap-2">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              onChange={handleChange}
              value={firstname}
            />
          </div>
          <button type="submit" className="button disabled:bg-gray-400">
            Send
          </button>
        </form>
      );
    }
  
  `,
  "use-local-storage": `
      import React, { useEffect, useRef, useState } from "react";

      function useLocalStorageState(
      key,
      defaultValue,
      { serialize = JSON.stringify, deserialize = JSON.parse } = {}
      ) {
      const [state, setState] = useState(() => {
          const valueInLocalStorage = window.localStorage.getItem(key);
          if (valueInLocalStorage) {
          return deserialize(valueInLocalStorage);
          }
          return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      });

      const prevKeyRef = useRef(key);

      useEffect(() => {
          const prevKey = prevKeyRef.current;
          if (key !== prevKey) {
          window.localStorage.removeItem(prevKeyRef.current);
          }
          prevKeyRef.current = key;
          window.localStorage.setItem(key, serialize(state));
      }, [key, serialize, state]);

      return [state, setState];
      }

      export function LocalStorage({ initianlFirstname = "" }) {
      const [firstname, setFirstname] = useLocalStorageState(
          "firstname",
          initianlFirstname
      );

      function handleChange(event) {
          const { value } = event.target;
          setFirstname(value);
      }

      return (
          <form className="p-4">
          <label htmlFor="firstname">First Name </label>
          <input
              id="firstname"
              type="text"
              onChange={handleChange}
              value={firstname}
          />
          <div className="font-bold text-blue-800 mt-2">
              {firstname ? \`Hello \${firstname}!\` : "Please Enter your firstname."}
          </div>
          </form>
      );
    }
  
  `,
}
