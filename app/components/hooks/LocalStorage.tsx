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
        {firstname ? `Hello ${firstname}!` : "Please Enter your firstname."}
      </div>
    </form>
  );
}
