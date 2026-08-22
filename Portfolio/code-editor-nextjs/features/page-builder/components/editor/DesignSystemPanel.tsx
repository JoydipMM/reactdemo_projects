"use client";

import type { BreakpointToken, DesignSystem } from "../../types";

interface DesignSystemPanelProps {
  designSystem: DesignSystem;
  onChange: (updater: (designSystem: DesignSystem) => DesignSystem) => void;
}

export function DesignSystemPanel({ designSystem, onChange }: DesignSystemPanelProps) {
  return (
    <aside className="pb-sidebar pb-settings" aria-label="Design system">
      <div className="pb-settings-title">
        <span>DS</span>
        <div>
          <strong>Design System</strong>
          <small>Global page tokens and CSS</small>
        </div>
      </div>
      <section className="pb-control-section">
        <h2>Global Styles</h2>
        <TokenInput label="Background" value={designSystem.globalStyles.backgroundColor ?? ""} onChange={(value) => onChange((system) => ({ ...system, globalStyles: { ...system.globalStyles, backgroundColor: value } }))} />
        <TokenInput label="Text color" value={designSystem.globalStyles.textColor ?? ""} onChange={(value) => onChange((system) => ({ ...system, globalStyles: { ...system.globalStyles, textColor: value } }))} />
        <TokenInput label="Font family" value={designSystem.globalStyles.fontFamily ?? ""} onChange={(value) => onChange((system) => ({ ...system, globalStyles: { ...system.globalStyles, fontFamily: value } }))} />
        <TokenInput label="Content width" value={designSystem.globalStyles.contentWidth ?? ""} onChange={(value) => onChange((system) => ({ ...system, globalStyles: { ...system.globalStyles, contentWidth: value } }))} />
      </section>
      <section className="pb-control-section">
        <h2>Global Colors</h2>
        {designSystem.colors.map((color, index) => (
          <div className="pb-token-row" key={color.id}>
            <input aria-label={`${color.name} name`} value={color.name} onChange={(event) => onChange((system) => updateArrayItem(system, "colors", index, { name: event.target.value }))} />
            <input aria-label={`${color.name} value`} type="color" value={color.value} onChange={(event) => onChange((system) => updateArrayItem(system, "colors", index, { value: event.target.value }))} />
            <input aria-label={`${color.name} color text`} value={color.value} onChange={(event) => onChange((system) => updateArrayItem(system, "colors", index, { value: event.target.value }))} />
          </div>
        ))}
      </section>
      <section className="pb-control-section">
        <h2>Typography</h2>
        {designSystem.typography.map((type, index) => (
          <div className="pb-token-grid" key={type.id}>
            <TokenInput label={`${type.name} family`} value={type.fontFamily} onChange={(value) => onChange((system) => updateArrayItem(system, "typography", index, { fontFamily: value }))} />
            <TokenInput label="Size" value={type.fontSize} onChange={(value) => onChange((system) => updateArrayItem(system, "typography", index, { fontSize: value }))} />
            <TokenInput label="Weight" value={type.fontWeight} onChange={(value) => onChange((system) => updateArrayItem(system, "typography", index, { fontWeight: value }))} />
            <TokenInput label="Line height" value={type.lineHeight} onChange={(value) => onChange((system) => updateArrayItem(system, "typography", index, { lineHeight: value }))} />
          </div>
        ))}
      </section>
      <section className="pb-control-section">
        <h2>Spacing System</h2>
        {designSystem.spacing.map((space, index) => (
          <div className="pb-token-row" key={space.id}>
            <input aria-label={`${space.name} name`} value={space.name} onChange={(event) => onChange((system) => updateArrayItem(system, "spacing", index, { name: event.target.value }))} />
            <input aria-label={`${space.name} value`} value={space.value} onChange={(event) => onChange((system) => updateArrayItem(system, "spacing", index, { value: event.target.value }))} />
          </div>
        ))}
      </section>
      <section className="pb-control-section">
        <h2>Responsive Breakpoints</h2>
        {designSystem.breakpoints.map((breakpoint, index) => (
          <div className="pb-token-row" key={breakpoint.id}>
            <input aria-label={`${breakpoint.label} label`} value={breakpoint.label} onChange={(event) => onChange((system) => updateBreakpoint(system, index, { label: event.target.value }))} />
            <input aria-label={`${breakpoint.label} width`} type="number" value={breakpoint.width} onChange={(event) => onChange((system) => updateBreakpoint(system, index, { width: Number(event.target.value) }))} />
          </div>
        ))}
      </section>
      <section className="pb-control-section">
        <h2>CSS Classes</h2>
        {designSystem.cssClasses.map((cssClass, index) => (
          <TokenInput key={cssClass.id} label="Class name" value={cssClass.name} onChange={(value) => onChange((system) => updateArrayItem(system, "cssClasses", index, { name: value }))} />
        ))}
        <p className="pb-help-text">Use these names in an element Advanced CSS classes field. Add more class rules in Custom CSS.</p>
      </section>
      <section className="pb-control-section">
        <h2>Custom CSS</h2>
        <label className="pb-control" htmlFor="pb-global-custom-css">
          <span>CSS</span>
          <textarea id="pb-global-custom-css" rows={8} value={designSystem.customCss} onChange={(event) => onChange((system) => ({ ...system, customCss: event.target.value }))} />
        </label>
      </section>
    </aside>
  );
}

function TokenInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="pb-control">
      <span>{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function updateArrayItem<TKey extends "colors" | "typography" | "spacing" | "cssClasses">(
  system: DesignSystem,
  key: TKey,
  index: number,
  patch: Partial<DesignSystem[TKey][number]>,
): DesignSystem {
  return {
    ...system,
    [key]: system[key].map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item),
  };
}

function updateBreakpoint(system: DesignSystem, index: number, patch: Partial<BreakpointToken>): DesignSystem {
  return {
    ...system,
    breakpoints: system.breakpoints.map((item, itemIndex) => itemIndex === index ? { ...item, ...patch } : item),
  };
}
