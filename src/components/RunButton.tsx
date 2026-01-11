import React from "react";

interface Props {
  onRun: () => void;
}

const RunButton: React.FC<Props> = ({ onRun }) => {
  return <button onClick={onRun}>Run</button>;
};

export default RunButton;
