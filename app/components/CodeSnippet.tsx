import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CodeSnippet({ name, ...props }) {
  const { data, error } = useSWR(`api/${name}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <SyntaxHighlighter language="javascript" style={nightOwl} {...props}>
      {data.code}
    </SyntaxHighlighter>
  );
}
