import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputConsole from "./components/OutputConsole";
import RunButton from "./components/RunButton";
import ElectricBorder from "./components/ElectricBorder";
import { runJavaCode } from "./utils/pistonApi";
import "./App.css";

const defaultCode = `import java.util.Scanner;

class Main {
  public static void main(String[] args) {
  System.out.println("Haaaai soldiers");
  }
}`;

function App() {
  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("10\n20\n30");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    try {
      const result = await runJavaCode(code, input);
      setOutput(result || "No output");
    } catch (error: any) {
      setOutput("Execution failed: " + (error.message || "Unknown error"));
    }
    setIsRunning(false);
  };

  return (
    <div className="app-container">
      <ElectricBorder color="#00d4ff" chaos={0.15} speed={1.2} borderRadius={20}>
        <div className="compiler-card">
          <div className="card-header">
            <span className="badge">SHIFT13</span>
            <h1>Hawkins Code Arena</h1>
            <p className="subtitle">Where keys don't mean what they type.</p>
          </div>

          <div className="editor-section">
            <label>Code Editor</label>
            <CodeEditor code={code} setCode={setCode} />
          </div>

          <div className="input-section">
            <label>Program Input</label>
            <textarea
              className="input-textarea"
              placeholder="Enter input for your program..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={3}
            />
          </div>

          <RunButton onRun={handleRun} isRunning={isRunning} />

          <div className="output-section">
            <label>Output</label>
            <OutputConsole output={output} />
          </div>

          <div className="card-footer">
            <span className="tag">Live</span>
            <span className="tag">v1.0</span>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
}

export default App;
