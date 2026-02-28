const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="text-xs font-sans-news text-muted-foreground hover:text-foreground transition-colors no-print"
    >
      🖨️ Print
    </button>
  );
};

export default PrintButton;
