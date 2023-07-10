import { useRef, useState } from "react";

// Basic forms
export function FormsV1() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Firstname is ${event.target.elements.firstname.value}`);
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
  const firstnameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (firstnameRef.current) {
      alert(`Firstname is ${firstnameRef.current.value}`);
    }
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
  const [error, setError] = useState<string | null>(null);

  function handleChange(event) {
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : "Firstname should be lower case");
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Firstname is ${event.target.elements.firstname.value}`);
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
    alert(`Firstname is ${firstname}`);
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
