import type { WidgetDefinition } from "../../types";

export class WidgetRegistry {
  private widgets = new Map<string, WidgetDefinition>();

  constructor(widgets: WidgetDefinition[] = []) {
    widgets.forEach((widget) => this.register(widget));
  }

  register(widget: WidgetDefinition): void {
    this.widgets.set(widget.type, widget);
  }

  get(type: string): WidgetDefinition | undefined {
    return this.widgets.get(type);
  }

  all(): WidgetDefinition[] {
    return Array.from(this.widgets.values());
  }

  byCategory(category: WidgetDefinition["category"]): WidgetDefinition[] {
    return this.all().filter((widget) => widget.category === category);
  }
}
