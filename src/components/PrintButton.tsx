const PrintButton = () => {
  return (
    <div className="flex justify-end mb-4 no-print">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
      >
        🖨️ Print / Save as PDF
      </button>
    </div>
  );
};

export default PrintButton;
