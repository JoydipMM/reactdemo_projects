"use client";

interface JsonExportDialogProps {
  json: string;
  copied: boolean;
  onClose: () => void;
  onCopy: () => void;
}

export function JsonExportDialog({ json, copied, onClose, onCopy }: JsonExportDialogProps) {
  return (
    <div className="pb-json-backdrop" role="presentation">
      <section className="pb-json-dialog" role="dialog" aria-modal="true" aria-labelledby="pb-json-title">
        <header className="pb-json-header">
          <div>
            <h2 id="pb-json-title">Page JSON</h2>
            <p>Current page structure saved locally and ready to store.</p>
          </div>
          <button type="button" className="pb-icon-button" onClick={onClose} aria-label="Close JSON export">
            X
          </button>
        </header>
        <textarea className="pb-json-output" readOnly value={json} aria-label="Saved page JSON" />
        <footer className="pb-json-actions">
          <span>{copied ? "Copied to clipboard" : "Formatted JSON output"}</span>
          <div>
            <button type="button" onClick={onCopy}>
              Copy JSON
            </button>
            <button type="button" className="pb-primary" onClick={onClose}>
              Done
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
