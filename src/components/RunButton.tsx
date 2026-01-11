interface Props {
  onRun: () => void;
  isRunning?: boolean;
}

const RunButton: React.FC<Props> = ({ onRun, isRunning }) => {
  return (
    <button
      onClick={onRun}
      disabled={isRunning}
      style={{
        width: "100%",
        padding: "14px 24px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#0d1117",
        background: isRunning 
          ? "linear-gradient(135deg, #8b949e 0%, #6e7681 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #e6e6e6 100%)",
        border: "none",
        borderRadius: "12px",
        cursor: isRunning ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 4px 14px rgba(255, 255, 255, 0.1)",
        marginBottom: "20px",
      }}
    >
      {isRunning ? "Running..." : "▶ Run Code"}
    </button>
  );
};

export default RunButton;
