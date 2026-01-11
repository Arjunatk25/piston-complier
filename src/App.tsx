import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputConsole from "./components/OutputConsole";
import RunButton from "./components/RunButton";
import { runJavaCode } from "./utils/pistonApi";
import "./App.css";

const defaultCode = `class Main {
  public static void main(String[] args) {
    System.out.println("arjun");
  }
}`;

function App() {
  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const result = await runJavaCode(code, input);
      setOutput(result.run.stdout || result.run.stderr);
    } catch {
      setOutput("Execution failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

        <div className="container">
      <h2>Java Online Compiler (Custom Keyboard Mapping)</h2>
      </div>
      <CodeEditor code={code} setCode={setCode} />

      <textarea
        placeholder="Program Input"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", marginTop: "10px" }}
      />

      <RunButton onRun={handleRun} />

      <OutputConsole output={output} />
    </div>
  );
}

export default App;
