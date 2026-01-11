import { useRef } from "react";
import { mapCharacter } from "../utils/keyMapper";

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor: React.FC<Props> = ({ code, setCode }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Handle Enter key - insert newline
    if (e.key === "Enter") {
      e.preventDefault();
      const newCode = code.slice(0, start) + "\n" + code.slice(end);
      setCode(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
      return;
    }

    // Handle Backspace
    if (e.key === "Backspace") {
      e.preventDefault();
      if (start !== end) {
        // Delete selection
        setCode(code.slice(0, start) + code.slice(end));
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start;
        }, 0);
      } else if (start > 0) {
        // Delete one char before cursor
        setCode(code.slice(0, start - 1) + code.slice(end));
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start - 1;
        }, 0);
      }
      return;
    }

    // Handle Delete key
    if (e.key === "Delete") {
      e.preventDefault();
      if (start !== end) {
        setCode(code.slice(0, start) + code.slice(end));
      } else if (end < code.length) {
        setCode(code.slice(0, start) + code.slice(end + 1));
      }
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start;
      }, 0);
      return;
    }

    // Handle Tab - insert 2 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const newCode = code.slice(0, start) + "  " + code.slice(end);
      setCode(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
      return;
    }

    // Only intercept printable single characters (not arrows, etc.)
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      const mapped = mapCharacter(e.key);
      
      const newCode = code.slice(0, start) + mapped + code.slice(end);
      setCode(newCode);
      
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={code}
      onChange={() => {}}
      onKeyDown={handleKeyDown}
      placeholder="Type Java code here..."
      rows={15}
      style={{ width: "100%", fontFamily: "monospace", fontSize: "14px" }}
    />
  );
};

export default CodeEditor;
