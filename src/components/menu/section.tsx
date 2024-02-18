import { MenuBarExtra as RCMenuBarExtra } from "@raycast/api";
import React, { Children, ReactNode } from "react";
import { joinNonEmpty } from "./utils";

interface ElementLimit {
  /** This function is called when there are more then max elements.
   * The given component will be shown as menu item.
   */
  moreElement?: (hidden: number) => JSX.Element | null;
  /** Maximum number of children */
  max?: number;
}

export interface MenuBarSectionProps extends RCMenuBarExtra.Props {
  subtitle?: string;
  /** The separator which will be used when a subtitle is set */
  titleSeparator?: string;
  /** Set the children limits */
  childrenLimit?: ElementLimit;
}

/**
 * Use {@link MenuBarExtra.Section} instead
 */
export function MenuBarSection({
  title: inTitle,
  subtitle,
  children,
  childrenLimit,
  titleSeparator,
}: MenuBarSectionProps) {
  const sep = titleSeparator && titleSeparator.trim().length > 0 ? titleSeparator.trim() : "";
  const title = joinNonEmpty(
    [inTitle, subtitle].filter((e) => e),
    ` ${sep} `,
  );
  const { shown, hidden } = shownElements(children, childrenLimit?.max);
  if (Children.count(children) <= 0) {
    return null;
  }
  return (
    <RCMenuBarExtra.Section title={title}>
      {shown}
      {hidden > 0 && childrenLimit?.moreElement && childrenLimit?.moreElement(hidden)}
    </RCMenuBarExtra.Section>
  );
}

function shownElements(elements?: ReactNode, maxElements?: number): { shown?: ReactNode; hidden: number } {
  if (!maxElements) {
    return { shown: elements, hidden: 0 };
  }
  if (React.isValidElement(elements)) {
    return { shown: [elements], hidden: 0 };
  }
  const els = elements as JSX.Element[] | undefined;
  if (!els || els.length <= 0) {
    return { shown: undefined, hidden: 0 };
  }
  const maxShown = maxElements || 10;
  const shown = els.slice(0, maxShown);
  const hidden = els.length - shown.length;
  return { shown, hidden };
}
