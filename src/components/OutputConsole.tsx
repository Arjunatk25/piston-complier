import React from "react";

interface Props {
  output: string;
}

const OutputConsole: React.FC<Props> = ({ output }) => {
  return (
    <pre
      style={{
        background: "#111",
        color: "#0f0",
        padding: "10px",
        minHeight: "120px",
      }}
    >
      {output}
    </pre>
  );
};

export default OutputConsole;
