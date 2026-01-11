interface Props {
  output: string;
}

const OutputConsole: React.FC<Props> = ({ output }) => {
  return (
    <pre
      style={{
        background: "#0d1117",
        border: "1px solid #30363d",
        borderRadius: "12px",
        color: "#58a6ff",
        padding: "16px",
        minHeight: "100px",
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: "14px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        margin: 0,
      }}
    >
      {output || "Output will appear here..."}
    </pre>
  );
};

export default OutputConsole;
