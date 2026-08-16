"use client";

import type { Viewport } from "../../types";

export function ResponsiveToolbar({ viewport, onChange }: { viewport: Viewport; onChange: (viewport: Viewport) => void }) {
  return (
    <div className="pb-responsive-mini" role="group" aria-label="Canvas viewport">
      {(["desktop", "tablet", "mobile"] as const).map((item) => (
        <button key={item} type="button" className={viewport === item ? "is-active" : ""} onClick={() => onChange(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
