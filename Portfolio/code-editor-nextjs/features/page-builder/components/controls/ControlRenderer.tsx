"use client";

import type { ControlDefinition, Viewport } from "../../types";
import { getAtPath } from "../../utils/styleUtils";
import { resolveResponsiveValue } from "../../utils/responsiveUtils";

interface ControlRendererProps {
  control: ControlDefinition;
  valueSource: Record<string, unknown>;
  viewport: Viewport;
  onChange: (value: unknown) => void;
}

export function ControlRenderer({ control, valueSource, viewport, onChange }: ControlRendererProps) {
  const rawValue = getAtPath(valueSource, control.path);
  const id = `control-${control.target}-${control.path.replaceAll(".", "-")}`;

  if (control.type === "textarea") {
    return (
      <label className="pb-control" htmlFor={id}>
        <span>{control.label}</span>
        <textarea id={id} value={String(rawValue ?? "")} placeholder={control.placeholder} onChange={(event) => onChange(event.target.value)} rows={4} />
      </label>
    );
  }

  if (control.type === "select" || control.type === "alignment") {
    const resolved = control.target === "styles" ? resolveResponsiveValue(rawValue as Record<string, string>, viewport) : rawValue;
    return (
      <label className="pb-control" htmlFor={id}>
        <span>{control.label}</span>
        <select id={id} value={String(resolved ?? "")} onChange={(event) => onChange(control.target === "styles" ? { ...(rawValue as object), [viewport]: event.target.value } : event.target.value)}>
          <option value="">Default</option>
          {control.options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </label>
    );
  }

  if (control.type === "spacing") {
    const current = (rawValue as Record<string, Record<string, string>> | undefined)?.[viewport] ?? {};
    return (
      <fieldset className="pb-control pb-spacing">
        <legend>{control.label}</legend>
        {(["top", "right", "bottom", "left"] as const).map((edge) => (
          <label key={edge} htmlFor={`${id}-${edge}`}>
            <span>{edge}</span>
            <input
              id={`${id}-${edge}`}
              value={current[edge] ?? ""}
              placeholder="0"
              onChange={(event) => onChange({ ...(rawValue as object), [viewport]: { ...current, [edge]: event.target.value } })}
            />
          </label>
        ))}
      </fieldset>
    );
  }

  if (control.type === "color") {
    const value = String(rawValue ?? "#000000");
    return (
      <label className="pb-control pb-color" htmlFor={id}>
        <span>{control.label}</span>
        <input id={id} type="color" value={isColor(value) ? value : "#000000"} onChange={(event) => onChange(event.target.value)} />
        <input aria-label={`${control.label} value`} value={String(rawValue ?? "")} placeholder="#111111" onChange={(event) => onChange(event.target.value)} />
      </label>
    );
  }

  const resolved = control.type === "responsiveText" ? resolveResponsiveValue(rawValue as Record<string, string>, viewport) : rawValue;
  return (
    <label className="pb-control" htmlFor={id}>
      <span>{control.label}</span>
      <input
        id={id}
        type={control.type === "url" ? "url" : "text"}
        value={String(resolved ?? "")}
        placeholder={control.placeholder}
        onChange={(event) => onChange(control.type === "responsiveText" ? { ...(rawValue as object), [viewport]: event.target.value } : event.target.value)}
      />
    </label>
  );
}

function isColor(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value);
}
