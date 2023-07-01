function Button({
  size = "",
  className = "",
  style = {},
  children,
  ...otherProps
}) {
  let myClassName = `button ${className}`;
  if (size) myClassName += ` button--${size}`;
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
