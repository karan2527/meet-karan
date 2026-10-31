type HighlightedTextProps = {
  text: string;
  highlights: string[];
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function HighlightedText({ text, highlights }: HighlightedTextProps) {
  if (highlights.length === 0) {
    return <>{text}</>;
  }

  const pattern = highlights
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");

  if (!pattern) {
    return <>{text}</>;
  }

  return (
    <>
      {text.split(new RegExp(`(${pattern})`, "gi")).map((part, index) =>
        highlights.some((highlight) => highlight.toLowerCase() === part.toLowerCase()) ? (
          <strong key={`${part}-${index}`} className="font-medium text-[#00ff66]">
            {part}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
